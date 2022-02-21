import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import * as htmlToImage from "html-to-image";
import { VStack } from "@chakra-ui/layout";

import { DownloadButton } from "./DownloadButton";
import { CopyButton } from "./CopyButton";
import { OptionsModal } from "./OptionsModal";
import { SvgAttributes } from "..";

interface EditorProps {
  svgData: SvgAttributes;
  setSvgData: Dispatch<SetStateAction<SvgAttributes>>;
}

export const Editor: React.FC<EditorProps> = ({ svgData, setSvgData }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const makeDataURL = async () => {
    const node = document.getElementById("reddit-preview");

    if (!node) {
      alert(
        "There is an issue with the editor. Can't generate or download image."
      );
      return;
    }

    const rawDataURL = await htmlToImage.toSvg(node);
    //@ts-ignore
    const { width, height } = rawDataURL.match(
      /svg%22%20width%3D%22(?<width>[0-9]*)%22%20height%3D%22(?<height>[0-9]*)%22/
    )?.groups;

    const scale = 960 / width;
    const outputHeight = scale * height;

    const dataURL = rawDataURL.replace(
      /svg%22%20width%3D%22[0-9]*%22%20height%3D%22[0-9]*%22/,
      `svg%22%20width%3D%22${960}%22%20height%3D%22${outputHeight}%22`
    );

    return { dataURL, outputHeight };
  };

  const exportImage = async (mode: "download" | "copy") => {
    const data = await makeDataURL();
    if (!data) {
      return;
    }
    const { dataURL, outputHeight } = data;

    setSvgData({
      uri: dataURL,
      width: 960,
      height: outputHeight,
      mode,
    });
  };

  useEffect(() => {
    if (svgData.uri === "") {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [svgData]);

  return (
    <VStack maxW="lg" marginX="auto" spacing={4}>
      <OptionsModal />
      <DownloadButton
        download={() => exportImage("download")}
        loading={loading}
      />
      <CopyButton copy={() => exportImage("copy")} loading={loading} />
    </VStack>
  );
};
