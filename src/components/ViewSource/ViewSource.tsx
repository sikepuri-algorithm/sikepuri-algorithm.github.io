import React, { useState, useEffect } from "react";
import Convert from "ansi-to-html";
import CodeBlock from "@theme/CodeBlock";
import OpenInColab from "../OpenInColab/OpenInColab";
import styles from "./styles.module.css";

const convert = new Convert({ newline: true });
type MarkdownCell = { cell_type: "markdown"; source: string };
type CodeCell = {
  cell_type: "code";
  source: string;
  outputs: string;
  cellColor: string;
};
type NotebookData = [...(MarkdownCell | CodeCell)[]];

function toHTML(type: "text" | "html" | "png" | "js", input): string {
  switch (type) {
    case "text":
      return convert.toHtml(input);
    case "html":
      return input;
    case "png":
      return `<img src="data:image/png;base64,${input}"></img>`;
    case "js":
      return `<script>${input}</script>`;
  }
}

function getOutput(outputs): { result: string; isError: boolean } {
  const results: string[] = [];
  let isError = false;
  for (const output of outputs) {
    switch (output.output_type) {
      case "stream":
        results.push(toHTML("text", output.text.join("")));
        break;
      case "execute_result": {
        const data = [];
        if (output.data["text/plain"] != null)
          data.push(toHTML("text", output.data["text/plain"].join("")));
        if (output.data["text/html"] != null)
          data.push(toHTML("html", output.data["text/html"].join("")));
        results.push(data.join(""));
        break;
      }
      case "error":
        results.push(toHTML("text", output.traceback.join("")));
        isError = true;
        break;
      case "display_data": {
        const item = [];
        if (output.data["text/plain"] != null)
          item.push(toHTML("text", output.data["text/plain"].join("")));
        if (output.data["text/html"] != null)
          item.push(toHTML("html", output.data["text/html"].join("")));
        if (output.data["application/javascript"] != null)
          item.push(toHTML("js", output.data["application/javascript"]));
        if (output.data["image/png"] != null)
          item.push(toHTML("png", output.data["image/png"]));
        results.push(item.join(""));
        break;
      }
    }
  }
  const result = results.join("");
  return { result, isError };
}

function getNotebookData(notebook): NotebookData {
  const notebookData: NotebookData = [];
  for (const cell of notebook.cells) {
    switch (cell.cell_type) {
      case "markdown":
        notebookData.push({
          cell_type: "markdown",
          source: cell.source.length === 0 ? null : cell.source.join(""),
        });
        break;
      case "code": {
        const { result, isError } = getOutput(cell.outputs);
        notebookData.push({
          cell_type: "code",
          source: cell.source.length === 0 ? null : cell.source.join(""),
          outputs: cell.outputs.length === 0 ? null : result,
          cellColor: isError ? "#ffdddc" : "#eee",
        });
        break;
      }
    }
  }
  return notebookData;
}

/**
 * ipynbファイルからソースコードと出力、OpenInColabへのリンクを生成
 * @param param0 現在ファイルからのipynbへの相対パス
 * @param param1 Pythonの出力を表示するか
 * @returns ソースコードと出力、OpenInColabへのリンク
 */

export default function ViewSource({
  path,
  noOutput = false,
}: {
  path: string;
  noOutput?: boolean;
}) {
  const [notebookData, setNotebookData] = useState<NotebookData>([]);
  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        setNotebookData(getNotebookData(json));
      });
  }, []);
  return (
    <>
      {notebookData.map((cell, i) => (
        <React.Fragment key={i}>
          {cell.cell_type === "markdown" && cell.source != null && cell.source}
          {cell.cell_type === "code" && (
            <>
              {cell.source != null && (
                <CodeBlock language="python">{cell.source}</CodeBlock>
              )}
              {!noOutput && cell.outputs != null && (
                <div
                  className={styles.iframeWrapper}
                  style={{ backgroundColor: cell.cellColor }}
                >
                  <iframe
                    id={`${path}${i}`}
                    height="40px"
                    width="100%"
                    srcDoc={cell.outputs}
                    onLoad={() => {
                      const iframe = document.getElementById(
                        `${path}${i}`,
                      ) as HTMLIFrameElement;
                      if (iframe !== null)
                        iframe.style.height =
                          iframe.contentDocument.documentElement.scrollHeight +
                          "px";
                    }}
                    title="Code Output"
                  />
                </div>
              )}
            </>
          )}
        </React.Fragment>
      ))}
      <OpenInColab path={path} />
    </>
  );
}
