import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Editor from "@monaco-editor/react";
import IframeOutput from "@site/src/components/IframeOutput";
import { Grid, Box } from "@mui/material";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [html, setHTML] = useState<string>("");
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Box p={2} mt={2}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6}>
            <Editor
              height="400px"
              defaultLanguage="html"
              defaultValue={"aouesa"}
              onChange={(value) => {
                setHTML(value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <IframeOutput>{html}</IframeOutput>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
