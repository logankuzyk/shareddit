import React, { useContext, useState } from "react";
import * as htmlToImage from "html-to-image";
import axios from "axios";

import { RedditContext } from "./RedditContext";
import { DownloadButton } from "./input/DownloadButton";
import { ScaleSlider } from "./input/ScaleSlider";
import { Toggle } from "./input/Toggle";

interface ImageOptionsProps {}

export const ImageOptions: React.FC<ImageOptionsProps> = () => {
  const [loading, setLoading] = useState(false);
  const {
    downloadAs,
    setters: { toggleDarkMode, toggleUsernames, toggleSubreddit },
  } = useContext(RedditContext);

  const download = () => {
    const node = document.getElementById("reddit-preview");

    if (node === null) {
      alert(
        "There is an issue with the editor. Can't generate or download image."
      );
      return;
    }

    if (downloadAs === "png") {
      setLoading(true);
      htmlToImage.toPng(node).then(async (dataURL) => {
        const buf = Buffer.from(
          dataURL.replace(/^data:image\/(png|jpg);base64,/, ""),
          "base64"
        );
        const {
          data: { uploadURL },
        } = await axios.get(
          `https://server.shareddit.com/getUploadURL/type=${downloadAs}`
        );

        if (!uploadURL) {
          setLoading(false);
          alert(
            "There is an issue with AWS or the shareddit backend server. Please try again later."
          );
          return;
        } else {
          axios
            .put(uploadURL, buf, {
              headers: {
                "Content-Encoding": "base64",
                "Content-Type": "image/png",
              },
            })
            .then((res) => {
              setLoading(false);
              if (res.status !== 200) {
                console.log(
                  dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
                );
                alert(
                  "Something went wrong, can't download image. The base 64 code is available in the console (press F12), you can turn that into an image here: https://codebeautify.org/base64-to-image-converter"
                );
              } else {
                window.open(uploadURL.split("?")[0]);
              }
            });
        }
      });
    }
  };

  return (
    <>
      <Toggle onToggle={toggleUsernames} />
      <Toggle onToggle={toggleSubreddit} />
      <Toggle onToggle={toggleDarkMode} />
      <ScaleSlider />
      <DownloadButton download={download} loading={loading} />
    </>
  );
};
