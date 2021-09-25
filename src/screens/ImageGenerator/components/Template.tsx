import React, { useContext, Dispatch, SetStateAction } from "react";
import { Box } from "@chakra-ui/react";
import { v4 } from "uuid";

import { CommentSelectInfoModal } from "./CommentSelectInfoModal";
import { RedditContext } from "./RedditContext";
import templates from "./templates";
import { SvgAttributes } from "../index";

interface TemplateProps {
  svgData: SvgAttributes;
  setSvgData: Dispatch<SetStateAction<SvgAttributes>>;
}

export const Template: React.FC<TemplateProps> = ({ svgData, setSvgData }) => {
  const data = useContext(RedditContext);
  const { darkMode, font, commentsOnly } = data;
  const { TitleTemplate, CommentTemplate } = templates(data.content.type);

  const triggerDownload = (base64: string) => {
    const click = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true,
    });
    const a = document.createElement("a");

    a.setAttribute("download", `shareddit-${v4()}.png`);
    a.setAttribute("href", base64);
    a.setAttribute("target", "_blank");

    a.dispatchEvent(click);
  };

  const svgToImage = () => {
    const imgNode = document.getElementById("shareddit-svg");
    const canvasNode = document.getElementById("shareddit-canvas");
    if (imgNode !== null && canvasNode !== null) {
      //@ts-ignore
      const ctx = canvasNode.getContext("2d");
      ctx.drawImage(imgNode, 0, 0);
      //@ts-ignore
      const dataURL = canvasNode.toDataURL("image/png");
      triggerDownload(dataURL);
      setSvgData({
        uri: "",
        width: 0,
        height: 0,
      });
    } else {
      alert("canvas is null");
    }
  };

  return svgData.uri !== "" ? (
    <>
      <img src={svgData.uri} id="shareddit-svg" alt="" onLoad={svgToImage} />
      <canvas
        style={{ marginBottom: 4 }}
        width={svgData.width}
        height={svgData.height}
        id="shareddit-canvas"
      ></canvas>
      <div id="shareddit-png"></div>
    </>
  ) : (
    <Box
      marginBottom={4}
      style={{
        display: "flex",
        borderRadius: "12px",
        borderWidth: 1,
        color: darkMode ? "#FFFFFF" : "#001219",
        borderColor: darkMode ? "#AAAAAA" : "#AAAAAA",
        flexDirection: "column",
        fontFamily: font,
        width: "100%",
        fontSize: 16,
        overflow: "hidden",
      }}
    >
      <Box
        id="reddit-preview"
        overflow="hidden"
        style={{
          position: "relative",
          padding: 12,
          backgroundColor: darkMode ? "#001219" : "#FFFFFF",
        }}
      >
        {commentsOnly ? <></> : <TitleTemplate {...data.content} />}
        {data.content.comments ? (
          <>
            <CommentSelectInfoModal />
            {commentsOnly ? <></> : <Box height={4} />}
            <CommentTemplate {...data.content.comments} />
          </>
        ) : (
          <></>
        )}
        <Box marginBottom={1}>
          <Box
            position="absolute"
            textAlign="right"
            bottom={0}
            width="100%"
            fontSize={12}
            paddingRight={6}
            marginTop={2}
            opacity={0.5}
          >
            {"📷 via shareddit.com"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
