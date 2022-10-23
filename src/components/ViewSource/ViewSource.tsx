/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import usePathname from "../usePathname";
import OpenInColab from "../OpenInColab/OpenInColab";

/**
 * ipynbファイルからソースコードと出力、OpenInColabへのリンクを生成
 * @param param0 現在ファイルからのipynbへの相対パス
 * @param param1 Pythonの出力を表示するか
 * @returns ソースコードと出力、OpenInColabへのリンク
 */

export default function ViewSource({ path, nooutput = false }) {
  const pathname = usePathname();
  const [sources, setSources] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);
  useEffect(() => {
    async function tmp() {
      // 該当のipynbファイルをjson形式でとってくる
      const content = await import(
        `/docs/${pathname.slice(6)}${path.slice(0, -6)}.json`
      );
      // ソースコードを取り出す
      setSources(
        content.cells
          .filter((cell) => cell.cell_type === "code")
          .map((cell) => cell.source.join(""))
      );
      // outputを取り出す
      setOutputs(
        content.cells
          .filter((cell) => cell.cell_type === "code")
          .map((cell) =>
            cell.outputs.length !== 0 ? cell : { outputs: [{ text: [""] }] }
          )
          .map((cell) =>
            cell.outputs.map((output) =>
              (output.text === undefined
                ? output.traceback===undefined ? output.data["text/plain"] : output.traceback
                : output.text
              ).join("")
            )
          )
      );
    }
    tmp();
  }, []);
  return (
    <>
      {sources.map((source, i) => (
        <React.Fragment key={i}>
          {/* ソースコード */}
          <CodeBlock language="python">{source}</CodeBlock>
          {/* output */}
          {!nooutput && (
            <CodeBlock language="plaintext">{outputs[i]}</CodeBlock>
          )}
        </React.Fragment>
      ))}
      <OpenInColab path={path} />
    </>
  );
}
