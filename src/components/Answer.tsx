import React from "react";
import Details from "@theme/Details";

/**
 * 解答を書くための、コンポーネント
 */
export default function Answer({ children }) {
  return <Details summary={<summary>解答</summary>}>{children}</Details>;
}
