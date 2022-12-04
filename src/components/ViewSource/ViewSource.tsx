import React, { useState, useEffect } from "react";
import Convert from "ansi-to-html";
import CodeBlock from "@theme/CodeBlock";
import OpenInColab from "../OpenInColab/OpenInColab";
import styles from "./styles.module.css";

type MarkdownCell = { cell_type: "markdown"; source: string };
type CodeCell = {
  cell_type: "code";
  source: string;
  output: string;
  cellColor: string;
};
type NotebookData = [...(MarkdownCell | CodeCell)[]];

/**
 * 各種データをHTMLに変換
 * @param type 変換するデータの種類
 * @param input 入力
 * @returns HTML形式の出力
 */
function toHTML(type: "text" | "html" | "js" | "png", input: string): string {
  const convert = new Convert({ newline: true });
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

/**
 * ipynbのoutputsオブジェクトをHTML形式に変換
 * @param outputs ipynbのoutputsオブジェクト
 * @returns HTML形式の出力とセルの種類
 */
type CellType = "normal" | "error";
function getOutput(outputs): { result: string; cellType: CellType } {
  const results: string[] = [];
  let cellType: CellType = "normal";
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
        cellType = "error";
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
  return { result, cellType };
}

/**
 * Notebookのデータを読み取る
 * @param notebook Notebookのオブジェクト
 * @returns 読み取った情報
 */
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
        const { result, cellType } = getOutput(cell.outputs);
        notebookData.push({
          cell_type: "code",
          source: cell.source.length === 0 ? null : cell.source.join(""),
          output: cell.outputs.length === 0 ? null : result,
          cellColor: cellType === "normal" ? "#eee" : "#ffdddc",
        });
        break;
      }
    }
  }
  return notebookData;
}

/**
 * セルをiframeで出力
 * @param param0 出力するもの
 * @param param1 セルの色
 * @param param2 セルのタイトル
 * @returns iframe
 */
function OutputCell({
  children: output,
  cellColor,
  title,
}: {
  children: string;
  cellColor: string;
  title: string;
}): JSX.Element {
  return (
    <div
      className={styles.iframeWrapper}
      style={{ backgroundColor: cellColor }}
    >
      <iframe
        height="40px"
        width="100%"
        style={{ minHeight: "40px" }}
        srcDoc={output}
        onLoad={(e) => {
          const iframe = e.target as HTMLIFrameElement;
          iframe.height =
            iframe.contentDocument.documentElement.scrollHeight + "px";
        }}
        title={title}
      />
    </div>
  );
}

/**
 * ipynbファイルからソースコードと出力、OpenInColabへのリンクを生成
 * @param param0 ipynbへのパス
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
              {!noOutput && cell.output != null && (
                <OutputCell cellColor={cell.cellColor} title="Code Output">
                  {cell.output}
                </OutputCell>
              )}
            </>
          )}
        </React.Fragment>
      ))}
      <OpenInColab path={path} />
    </>
  );
}
