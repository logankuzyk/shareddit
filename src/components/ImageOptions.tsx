import React, { useContext } from "react";
import * as htmlToImage from "html-to-image";
import { RedditContext } from "./RedditContext";
import { DownloadButton } from "./input/DownloadButton";

interface ImageOptionsProps {}

export const ImageOptions: React.FC<ImageOptionsProps> = () => {
  const { downloadAs, content } = useContext(RedditContext);
  const filename = `shareddit - ${content.title}`;

  const download = () => {
    const node = document.getElementById("reddit-preview");

    if (node === null) {
      alert("Something went wrong, can't download image.");
      return;
    }

    if (downloadAs === "png") {
      htmlToImage.toPng(node).then(async (dataURL) => {
        localStorage.setItem("shareddit-image", dataURL);
        const image = localStorage.getItem("shareddit-image");
        window.location.href = "/download";
      });
    }
  };

  return <DownloadButton download={download} />;
};
