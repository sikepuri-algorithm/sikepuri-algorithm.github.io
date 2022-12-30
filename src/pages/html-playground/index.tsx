import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
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
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>\
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [html, setHTML] = useState<string>(defaultHTML);
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
              defaultValue={defaultHTML}
              onChange={(value) => {
                setHTML(value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomIframe height="80vh">{html}</CustomIframe>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
