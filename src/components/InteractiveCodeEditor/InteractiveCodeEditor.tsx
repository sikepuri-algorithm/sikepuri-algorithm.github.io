import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Editor from "@monaco-editor/react";
import MarkdownIt from "markdown-it";
import mk from "markdown-it-katex";
import BrowserWindow from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

export default function InteractiveCodeEditor({
  language,
  defaultValue,
  defaultHTML,
  defaultCSS,
  defaultJavaScript,
}: {
  language: "html" | "markdown" | "HTML-CSS-JavaScript" | "latex";
  defaultValue?: string;
  defaultHTML?: string;
  defaultCSS?: string;
  defaultJavaScript?: string;
}) {
  const [code, setCode] = useState<string>(defaultValue);
  const [html, setHTML] = useState<string>(defaultHTML);
  const [css, setCSS] = useState<string>(defaultCSS);
  const [js, setJS] = useState<string>(defaultJavaScript);
  const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
  md.use(mk);
  const markdownDefaultValue = `
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>
`;

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
                  height="200px"
                  defaultLanguage="html"
                  defaultValue={defaultHTML}
                  onChange={(value) => {
                    setHTML(value);
                  }}
                />
              </TabItem>
              <TabItem value="css" label="CSS">
                <Editor
                  height="200px"
                  defaultLanguage="css"
                  defaultValue={defaultCSS}
                  onChange={(value) => {
                    setCSS(value);
                  }}
                />
              </TabItem>
              <TabItem value="js" label="JavaScript">
                <Editor
                  height="200px"
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
              height="200px"
              defaultLanguage={language}
              defaultValue={defaultValue}
              onChange={(value) => {
                setCode(value);
              }}
            />
          )}
        </div>
        <div className={styles.playgroundHeader}>結果</div>
        <div className={styles.playgroundPreview}>
          <BrowserWindow minHeight={200}>
            <iframe
              width="100%"
              height="100%"
              srcDoc={
                language === "html"
                  ? code
                  : language === "markdown"
                  ? markdownDefaultValue + md.render(code)
                  : language === "latex"
                  ? latexRender(code)
                  : `<style>${css}</style>${html}<script>${js}</script>`
              }
              title="Live Code"
            ></iframe>
          </BrowserWindow>
        </div>
      </div>
    </>
  );
}
