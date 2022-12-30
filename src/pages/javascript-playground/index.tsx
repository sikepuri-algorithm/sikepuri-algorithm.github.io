import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Editor from "@monaco-editor/react";
import CustomIframe from "@site/src/components/CustomIframe";
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
    <script src="./script.js"></script>
  </body>
</html>\
`;
const defaultCSS = "";
const defaultJS = `\
document.write("Hello World!");\
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [html, setHTML] = useState<string>(defaultHTML);
  const [css, setCSS] = useState<string>(defaultCSS);
  const [js, setJS] = useState<string>(defaultJS);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This is a playground of JavaScript"
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
              <TabItem value="js" label="JavaScript">
                <Editor
                  height="80vh"
                  defaultLanguage="javascript"
                  defaultValue={defaultJS}
                  onChange={(value) => {
                    setJS(value);
                  }}
                />
              </TabItem>
            </Tabs>
          </Grid>
          <Grid item xs={6}>
            <CustomIframe height="80vh">
              {"<style>" +
                css +
                "</style>" +
                html +
                "<script>" +
                js +
                "</script>"}
            </CustomIframe>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
