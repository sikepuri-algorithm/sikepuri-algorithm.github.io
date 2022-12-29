import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Editor from "@monaco-editor/react";
import IframeOutput from "@site/src/components/IframeOutput";
import { Grid, Box } from "@mui/material";
import mdToHTML from "@site/src/components/mdToHTML";

const defaultMd = `\
Hello Markdown!
\
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [md, setMd] = useState<string>(defaultMd);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This is a playground of HTML"
    >
      <Box p={2} mt={2}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6}>
            <Editor
              height="80vh"
              defaultLanguage="html"
              defaultValue={defaultMd}
              onChange={(value) => {
                setMd(value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <IframeOutput height="80vh">{mdToHTML(md)}</IframeOutput>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
