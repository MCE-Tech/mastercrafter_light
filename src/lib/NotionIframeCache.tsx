// src/utils/NotionIframeCache.tsx
import React from "react";

let iframeElement: JSX.Element | null = null;

export const getNotionIframe = (): JSX.Element => {
  if (!iframeElement) {
    iframeElement = (
      <iframe
        src="https://v2-embednotion.com/1e434c2c07ee80419a4cf725da78c7cc"
        className="w-full h-screen"
        title="Notion Page Embed"
      />
    );
  }
  return iframeElement;
};
