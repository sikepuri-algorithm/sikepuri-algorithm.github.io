/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import usePathname from "../usePathname";
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
  const pathname = usePathname();
  const [sources, setSources] = useState<string[]>([]);
  const [content, setContent] = useState();
  useEffect(() => {
    async function tmp() {
      // 該当のipynbファイルをjson形式でとってくる
      const json = await import(
        `/docs/${pathname.slice(6)}${path.slice(0, -6)}.json`
      );
      setSources(getSources(json));
      setContent(json);
    }
    tmp();
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
