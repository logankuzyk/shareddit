import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { FaImage } from "@react-icons/all-files/fa/FaImage";
import { FaFilm } from "@react-icons/all-files/fa/FaFilm";

interface ImageProps {
  src: string;
  host: string;
  icon: "link" | "image" | "video";
}

export const Image: React.FC<ImageProps> = ({ src, host, icon }) => {
  const icons = {
    link: <LinkIcon />,
    image: <Icon as={FaImage} />,
    video: <Icon as={FaFilm} />,
  };

  return (
    <Box
      style={{
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#AAAAAA",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={`https://server.shareddit.com:8080/${src}`}
        width="100%"
        height="100%"
        alt="reddit submission"
      />
      <Box
        position="absolute"
        background="rgba(0, 0, 0, 0.5)"
        color="#AAAAAA"
        textAlign="center"
        bottom={0}
        width="100%"
        fontSize={12}
      >
        {icons[icon]} {host}
      </Box>
    </Box>
  );
};
