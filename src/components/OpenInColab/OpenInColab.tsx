import React from "react";
import styles from "./styles.module.css";

/**
 * OpenInColabへのリンクをつくるコンポーネント
 * @param param0 現在ファイルからのipynbへの相対パス
 * @returns OpenInColabへのリンク
 */

export default function OpenInColab({ path }: { path: string }) {
  return (
    <>
      <div className={styles.root}>
        <a
          href={`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${path}`}
          target="_blank"
          rel="noreferrer"
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
