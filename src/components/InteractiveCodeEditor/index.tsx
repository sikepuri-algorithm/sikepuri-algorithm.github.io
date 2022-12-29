import React, { Dispatch, SetStateAction, useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Editor from "@monaco-editor/react";
import IframeOutput from "@site/src/components/IframeOutput";
import mdToHTML from "@site/src/components/mdToHTML";
import styles from "./styles.module.css";

function latexRenderer(value: string): string {
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

function HtmlCssJavascriptEditor({
  defaultHTML,
  setHTML,
  defaultCSS,
  setCSS,
  defaultJavaScript,
  setJS,
}: {
  defaultHTML: string;
  setHTML: Dispatch<SetStateAction<string>>;
  defaultCSS: string;
  setCSS: Dispatch<SetStateAction<string>>;
  defaultJavaScript: string;
  setJS: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
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
    </>
  );
}

function HtmlCssEditor({
  defaultHTML,
  setHTML,
  defaultCSS,
  setCSS,
}: {
  defaultHTML: string;
  setHTML: Dispatch<SetStateAction<string>>;
  defaultCSS: string;
  setCSS: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
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
      </Tabs>
    </>
  );
}

export default function InteractiveCodeEditor({
  language,
  children,
  defaultCSS,
  defaultJavaScript,
}: {
  language: "markdown" | "html" | "html-css" | "html-css-javascript" | "latex";
  children?: string;
  defaultCSS?: string;
  defaultJavaScript?: string;
}) {
  const [code, setCode] = useState<string>(children);
  const [css, setCSS] = useState<string>(defaultCSS);
  const [js, setJS] = useState<string>(defaultJavaScript);

  return (
    <>
      <div className={styles.playgroundContainer}>
        <div className={styles.playgroundHeader}>ライブエディター</div>
        <div className={styles.playgroundEditor}>
          {language === "html-css-javascript" ? (
            <HtmlCssJavascriptEditor
              defaultHTML={children}
              setHTML={setCode}
              defaultCSS={defaultCSS}
              setCSS={setCSS}
              defaultJavaScript={defaultJavaScript}
              setJS={setJS}
            />
          ) : language === "html-css" ? (
            <HtmlCssEditor
              defaultHTML={children}
              setHTML={setCode}
              defaultCSS={defaultCSS}
              setCSS={setCSS}
            />
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
              ? latexRenderer(code)
              : language === "html-css"
              ? `<style>${css}</style>${code}`
              : `<style>${css}</style>${code}<script>${js}</script>`}
          </IframeOutput>
        </div>
      </div>
    </>
  );
}
