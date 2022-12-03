/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import JupyterViewer from "react-jupyter-notebook";
import OpenInColab from "../OpenInColab/OpenInColab";
import "./styles.css";

function getSources(json) {
  return json.cells
    .filter((cell) => cell.cell_type === "code")
    .map((cell) => cell.source.join(""));
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
  const [sources, setSources] = useState<string[]>([]);
  const [content, setContent] = useState();
  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        setSources(getSources(json));
        setContent(json);
      });
  }, []);
  return (
    <>
      {sources.map((source, i) => (
        <React.Fragment key={i}>
          <CodeBlock language="python">{source}</CodeBlock>
        </React.Fragment>
      ))}
      {content !== undefined && !noOutput && (
        <JupyterViewer
          rawIpynb={content}
          language="python"
          displaySource="hide"
        />
      )}
      <OpenInColab path={path} />
    </>
  );
}
