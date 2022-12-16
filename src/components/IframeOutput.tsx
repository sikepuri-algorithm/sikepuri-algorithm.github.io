import React from "react";
import BrowserWindow from "@site/src/components/BrowserWindow";

export default function IframeOutput({ children }: { children: string }) {
  return (
    <>
      <BrowserWindow minHeight={200}>
        <iframe
          width="100%"
          height="100%"
          srcDoc={children}
          title="Live Code"
          onLoad={(e) => {
            setInterval(
              (e) => {
                const iframe = e.target as HTMLIFrameElement;
                iframe.height =
                  iframe.contentDocument.documentElement.scrollHeight + "px";
              },
              1000,
              e
            );
          }}
        ></iframe>
      </BrowserWindow>
    </>
  );
}
