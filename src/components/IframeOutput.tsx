import React from "react";
import BrowserWindow from "@site/src/components/BrowserWindow";

export default function IframeOutput({
  children,
  height,
}: {
  children: string;
  height?: number;
}) {
  return (
    <>
      <BrowserWindow minHeight={height === undefined ? 200 : height}>
        <iframe
          width="100%"
          height={height === undefined ? "100%" : height * 0.7 + "px"}
          srcDoc={children}
          title="Live Code"
          onLoad={(e) => {
            setInterval(
              (e) => {
                if (height == undefined) {
                  const iframe = e.target as HTMLIFrameElement;
                  iframe.height = "100%";
                  iframe.height =
                    iframe.contentDocument.documentElement.scrollHeight + "px";
                }
              },
              3000,
              e
            );
          }}
        ></iframe>
      </BrowserWindow>
    </>
  );
}
