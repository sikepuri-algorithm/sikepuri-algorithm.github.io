import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import MarkdownIt from "markdown-it";
import BrowserWindow from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

export default function InteractiveCodeEditor({
  language,
  defaultValue,
}: {
  language: "html" | "markdown";
  defaultValue: string;
}) {
  const [code, setCode] = useState<string>(defaultValue);
  const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
  const css = `
<style>
  blockquote {
    margin: 0;
  }

  blockquote p {
    padding: 15px;
    background: #eee;
    border-radius: 5px;
  }

  blockquote p::before {
    content: '\\201C';
  }

  blockquote p::after {
    content: '\\201D';
  }

  code {
    background-color: #eee;
    border-radius: 3px;
    font-family: courier, monospace;
    padding: 0 3px;
  }
  pre code {
    padding: 20px 5px;
  }
</style>
`;
  return (
    <>
      <div className={styles.playgroundContainer}>
        <div className={styles.playgroundHeader}>ライブエディター</div>
        <div className={styles.playgroundEditor}>
          <Editor
            height="200px"
            defaultLanguage={language}
            defaultValue={defaultValue}
            onChange={(value) => {
              setCode(value);
            }}
          />
        </div>
        <div className={styles.playgroundHeader}>結果</div>
        <div className={styles.playgroundPreview}>
          <BrowserWindow minHeight={200}>
            <iframe
              width="100%"
              height="100%"
              srcDoc={language === "html" ? code : css + md.render(code)}
              title="Live Code"
            ></iframe>
          </BrowserWindow>
        </div>
      </div>
    </>
  );
}
