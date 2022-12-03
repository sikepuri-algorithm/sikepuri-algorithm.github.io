import React, { useState, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import OpenInColab from "../OpenInColab/OpenInColab";
import styles from "./styles.module.css";

type MarkdownCell = { cell_type: "markdown"; source: string };
type CodeCell = { cell_type: "code"; source: string; outputs: string };
type NotebookData = [...(MarkdownCell | CodeCell)[]];

// \n => <br/>
function getOutputs(outputs): string {
  let html = "";
  for (const output of outputs) {
    switch (output.output_type) {
      case "stream":
        html += output.text.join("");
        break;
      case "execute_result":
        if (output.data["text/plain"] != null)
          html += output.data["text/plain"].join("");
        if (output.data["text/html"]) html += output.data["text/html"].join("");
        break;
      case "error":
        html += output.traceback.join("");
        break;
      case "display_data":
        if (output.data["text/plain"] != null)
          html += output.data["text/plain"].join("");
        if (output.data["text/html"] != null)
          html += output.data["text/html"].join("");
        if (output.data["application/javascript"] != null)
          html += output.data["application/javascript"];
        if (output.data["image/png"] != null) html += output.data["image/png"];
        break;
    }
  }
  return html;
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
          outputs: cell.outputs.length === 0 ? null : getOutputs(cell.outputs),
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
              {!noOutput && cell.outputs != null && (
                <div className={styles.iframeWrapper}>
                  <iframe
                    width="100%"
                    srcDoc={cell.outputs}
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
