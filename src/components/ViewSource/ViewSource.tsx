import React, { useState, useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import CodeBlock from "@theme/CodeBlock";
import OpenInColab from "../OpenInColab/OpenInColab";

export default function ViewSource({ path, nooutput = false }) {
  const pathname = useLocation().pathname.slice(22);
  const [sources, setSources] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);
  useEffect(() => {
    async function tmp() {
      const content = await import(
        `/docs/${pathname.slice(6)}${path.slice(0, -6)}.json`
      );
      setSources(
        content.cells
          .filter((cell) => cell.cell_type === "code")
          .map((cell) => cell.source.join(""))
      );
      setOutputs(
        content.cells
          .filter((cell) => cell.cell_type === "code")
          .map((cell) =>
            cell.outputs.length !== 0 ? cell : { outputs: [{ text: [""] }] }
          )
          .map((cell) =>
            cell.outputs.map((output) =>
              (output.text === undefined
                ? output.data["text/plain"]
                : output.text
              ).join("")
            )
          )
      );
    }
    tmp();
  }, []);
  return (
    <>
      {sources.map((source, i) => (
        <React.Fragment key={i}>
          <CodeBlock language="python">{source}</CodeBlock>
          {!nooutput && (
            <CodeBlock language="plaintext">{outputs[i]}</CodeBlock>
          )}
        </React.Fragment>
      ))}
      <OpenInColab path={path} />
    </>
  );
}
