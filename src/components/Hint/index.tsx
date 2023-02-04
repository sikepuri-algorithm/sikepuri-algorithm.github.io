import React, { type ReactNode } from "react";
import Details from "@theme/Details";

/**
 * Hint component
 */
export default function Hint({ children }: { children: ReactNode }) {
  return <Details summary={<summary>ヒント</summary>}>{children}</Details>;
}
