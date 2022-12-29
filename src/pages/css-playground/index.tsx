import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Editor from "@monaco-editor/react";
import IframeOutput from "@site/src/components/IframeOutput";
import { Grid, Box } from "@mui/material";

const defaultHTML = `\
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <p>Hello CSS!</p>
  </body>
</html>\
`;
const defaultCSS = `\
p {
  color: red;
}\
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [html, setHTML] = useState<string>(defaultHTML);
  const [css, setCSS] = useState<string>(defaultCSS);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This is a playground of CSS"
    >
      <Box p={2} mt={2}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6}>
            <Tabs groupId="editor">
              <TabItem value="html" label="HTML">
                <Editor
                  height="80vh"
                  defaultLanguage="html"
                  defaultValue={defaultHTML}
                  onChange={(value) => {
                    setHTML(value);
                  }}
                />
              </TabItem>
              <TabItem value="css" label="CSS">
                <Editor
                  height="80vh"
                  defaultLanguage="css"
                  defaultValue={defaultCSS}
                  onChange={(value) => {
                    setCSS(value);
                  }}
                />
              </TabItem>
            </Tabs>
          </Grid>
          <Grid item xs={6}>
            <IframeOutput height="80vh">
              {"<style>" + css + "</style>" + html}
            </IframeOutput>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
