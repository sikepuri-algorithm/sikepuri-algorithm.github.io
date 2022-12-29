import MarkdownIt from "markdown-it";
import mk from "markdown-it-katex";

export default function mdToHTML(mdCode) {
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
  return markdownDefaultValue + md.render(mdCode);
}
