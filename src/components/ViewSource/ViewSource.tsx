/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import usePathname from "../usePathname";
import JupyterViewer from "react-jupyter-notebook";
import OpenInColab from "../OpenInColab/OpenInColab";

/**
 * ipynbファイルからソースコードと出力、OpenInColabへのリンクを生成
 * @param param0 現在ファイルからのipynbへの相対パス
 * @param param1 Pythonの出力を表示するか
 * @returns ソースコードと出力、OpenInColabへのリンク
 */

export default function ViewSource({ path, nooutput = false }) {
  const pathname = usePathname();
  const [content, setContent] = useState();
  useEffect(() => {
    async function tmp() {
      // 該当のipynbファイルをjson形式でとってくる
      const json = await import(
        `/docs/${pathname.slice(6)}${path.slice(0, -6)}.json`
      );
      setContent(json);
    }
    tmp();
  }, []);
  return (
    <>
      {content !== undefined && (
        <JupyterViewer rawIpynb={content} language="python" />
      )}
      <OpenInColab path={path} />
    </>
  );
}
