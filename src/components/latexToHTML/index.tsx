export default function latexToHTML(value: string): string {
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
