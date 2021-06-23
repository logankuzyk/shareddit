import React, { useContext } from "react";
import * as htmlToImage from "html-to-image";

import { RedditContext } from "./RedditContext";
import { DownloadButton } from "./input/DownloadButton";

interface ImageOptionsProps {}

export const ImageOptions: React.FC<ImageOptionsProps> = () => {
  const { downloadAs } = useContext(RedditContext);

  const download = () => {
    const node = document.getElementById("reddit-preview");

    if (node === null) {
      alert("Something went wrong, can't download image.");
      return;
    }

    if (downloadAs === "png") {
      htmlToImage.toPng(node).then((dataURL) => {
        var img = new Image();
        img.src = dataURL;
        document.body.appendChild(img);
      });
    }
  };

  return <DownloadButton download={download} />;
};
