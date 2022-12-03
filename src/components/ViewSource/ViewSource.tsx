import React, { useState, useEffect } from "react";
import Convert from "ansi-to-html";
import CodeBlock from "@theme/CodeBlock";
import OpenInColab from "../OpenInColab/OpenInColab";
import styles from "./styles.module.css";

const convert = new Convert({ newline: true });
type MarkdownCell = { cell_type: "markdown"; source: string };
type CodeCell = { cell_type: "code"; source: string; outputs: JSX.Element[] };
type NotebookData = [...(MarkdownCell | CodeCell)[]];

function toIframe(key, input, error = false) {
  return (
    <div
      className={styles.iframeWrapper}
      style={{ backgroundColor: error ? "red" : "#eee" }}
      key={key}
    >
      <iframe width="100%" srcDoc={input} title="Code Output" />
    </div>
  );
}

function toHTML(type: "text" | "html" | "png" | "js", input) {
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

function getOutput(outputs): JSX.Element[] {
  const result: JSX.Element[] = [];
  outputs.forEach((output, i) => {
    switch (output.output_type) {
      case "stream":
        result.push(toIframe(i, toHTML("text", output.text.join(""))));
        break;
      case "execute_result": {
        const item = [];
        if (output.data["text/plain"] != null)
          item.push(toHTML("text", output.data["text/plain"].join("")));
        if (output.data["text/html"] != null)
          item.push(toHTML("html", output.data["text/html"].join("")));
        result.push(toIframe(i, item.join("")));
        break;
      }
      case "error":
        result.push(
          toIframe(i, toHTML("text", output.traceback.join("")), true),
        );
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
        result.push(toIframe(i, item.join("")));
        break;
      }
    }
  });
  return result;
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
      case "code":
        notebookData.push({
          cell_type: "code",
          source: cell.source.length === 0 ? null : cell.source.join(""),
          outputs: cell.outputs.length === 0 ? null : getOutput(cell.outputs),
        });
        break;
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
              {!noOutput && cell.outputs != null && cell.outputs}
            </>
          )}
        </React.Fragment>
      ))}
      <OpenInColab path={path} />
    </>
  );
}
