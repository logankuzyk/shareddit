import React from "react";
import { Box } from "@chakra-ui/react";

interface ImageProps {
  src: string;
  host: string;
  icon: "link" | "image" | "video";
}

export const Image: React.FC<ImageProps> = ({ src, host, icon }) => {
  return (
    <Box
      style={{
        borderRadius: 12,
        borderWidth: 4,
        borderColor: "#AAAAAA",
      }}
    >
      <img
        src={src}
        width="100%"
        height="100%"
        style={{ borderRadius: 10 }}
      ></img>
    </Box>
  );
};
