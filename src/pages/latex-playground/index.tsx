import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Editor from "@monaco-editor/react";
import IframeOutput from "@site/src/components/IframeOutput";
import { Grid, Box } from "@mui/material";
import latexToHTML from "@site/src/components/latexToHTML";

const defaultLatex = `\
\\documentclass{article}
\\begin{document}
  Hello World!
  \\[
    a^2 + b^2 = c^2
  \\]
\\end{document}
\
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [latex, setLatex] = useState<string>(defaultLatex);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This is a playground of LaTeX"
    >
      <Box p={2} mt={2}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6}>
            <Editor
              height="80vh"
              defaultLanguage="html"
              defaultValue={defaultLatex}
              onChange={(value) => {
                setLatex(value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <IframeOutput height="80vh">{latexToHTML(latex)}</IframeOutput>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
