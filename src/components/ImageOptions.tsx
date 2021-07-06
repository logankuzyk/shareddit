import React, { useContext } from "react";
import * as htmlToImage from "html-to-image";
import axios from "axios";

import { RedditContext } from "./RedditContext";
import { DownloadButton } from "./input/DownloadButton";
import { ScaleSlider } from "./input/ScaleSlider";
import { Toggle } from "./input/DarkModeToggle";

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
        // localStorage.setItem("shareddit-image", dataURL);
        // window.location.href = "/download";

        const data = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

        const {
          data: { uploadURL },
        } = await axios.get("http://localhost:3000/getUploadURL");

        const res = await axios.put(uploadURL, data, {
          headers: {
            "Content-Encoding": "base64",
            "Content-Type": "image/png",
          },
        });

        console.log(res);
      });
    }
  };

  return (
    <>
      <Toggle />
      <ScaleSlider />
      <DownloadButton download={download} />
    </>
  );
};
