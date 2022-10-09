import React from "react";
import { useLocation } from "@docusaurus/router";
import styles from "./styles.module.css";

export default function OpenInColab({ path }) {
  const pathname = useLocation().pathname.slice(22);
  return (
    <>
      <div className={styles.root}>
        <a
          href={`https://colab.research.google.com/github/chvmvd/sikepuri-of-algorithm/blob/main${pathname}${path}`}
          target="_blank"
          rel="noopener"
        >
          <img
            src="https://colab.research.google.com/assets/colab-badge.svg"
            alt="Open In Colab"
            width="150"
          />
        </a>
      </div>
    </>
  );
}
