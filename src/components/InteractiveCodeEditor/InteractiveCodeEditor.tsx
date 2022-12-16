import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Editor from "@monaco-editor/react";
import IframeOutput from "../IframeOutput";
import mdToHTML from "@site/src/components/mdToHTML";
import styles from "./styles.module.css";

export default function InteractiveCodeEditor({
  language,
  children,
  defaultHTML,
  defaultCSS,
  defaultJavaScript,
}: {
  language: "html" | "markdown" | "HTML-CSS-JavaScript" | "latex";
  children?: string;
  defaultHTML?: string;
  defaultCSS?: string;
  defaultJavaScript?: string;
}) {
  const [code, setCode] = useState<string>(children);
  const [html, setHTML] = useState<string>(defaultHTML);
  const [css, setCSS] = useState<string>(defaultCSS);
  const [js, setJS] = useState<string>(defaultJavaScript);

  function latexRender(value: string) {
    const header = `\
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <script type="module">
          import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs";
          customElements.define("latex-js", LaTeXJSComponent);
        </script>
      </head>
      <body>
        <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/">\
  `;
    const footer = `\
        </latex-js>
      </body>
    </html>\
  `;
    return header + value + footer;
  }
  return (
    <>
      <div className={styles.playgroundContainer}>
        <div className={styles.playgroundHeader}>ライブエディター</div>
        <div className={styles.playgroundEditor}>
          {language === "HTML-CSS-JavaScript" ? (
            <Tabs groupId="editor">
              <TabItem value="html" label="HTML">
                <Editor
                  height="400px"
                  defaultLanguage="html"
                  defaultValue={defaultHTML}
                  onChange={(value) => {
                    setHTML(value);
                  }}
                />
              </TabItem>
              <TabItem value="css" label="CSS">
                <Editor
                  height="400px"
                  defaultLanguage="css"
                  defaultValue={defaultCSS}
                  onChange={(value) => {
                    setCSS(value);
                  }}
                />
              </TabItem>
              <TabItem value="js" label="JavaScript">
                <Editor
                  height="400px"
                  defaultLanguage="javascript"
                  defaultValue={defaultJavaScript}
                  onChange={(value) => {
                    setJS(value);
                  }}
                />
              </TabItem>
            </Tabs>
          ) : (
            <Editor
              height="400px"
              defaultLanguage={language}
              defaultValue={children}
              onChange={(value) => {
                setCode(value);
              }}
            />
          )}
        </div>
        <div className={styles.playgroundHeader}>結果</div>
        <div className={styles.playgroundPreview}>
          <IframeOutput>
            {language === "html"
              ? code
              : language === "markdown"
              ? mdToHTML(code)
              : language === "latex"
              ? latexRender(code)
              : `<style>${css}</style>${html}<script>${js}</script>`}
          </IframeOutput>
        </div>
      </div>
    </>
  );
}
