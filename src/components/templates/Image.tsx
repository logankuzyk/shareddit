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
        borderWidth: 1,
        borderColor: "#AAAAAA",
        overflow: "hidden",
      }}
    >
      <img
        src={`http://192.53.122.196:8080/${src}`}
        width="100%"
        height="100%"
        alt="reddit submission"
      />
    </Box>
  );
};
