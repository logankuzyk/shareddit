import React, { useContext } from "react";
import * as htmlToImage from "html-to-image";

import { RedditContext } from "./RedditContext";
import { DownloadButton } from "./input/DownloadButton";
import { ScaleSlider } from "./input/ScaleSlider";

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
      htmlToImage.toPng(node).then(async (dataURL) => {
        localStorage.setItem("shareddit-image", dataURL);
        window.location.href = "/download";
      });
    }
  };

  return (
    <>
      <ScaleSlider />
      <DownloadButton download={download} />
    </>
  );
};
