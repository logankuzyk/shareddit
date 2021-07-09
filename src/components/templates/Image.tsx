import React, { useContext } from "react";
import { Box, Icon, WrapItem } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { Fade } from "@chakra-ui/transition";
import { FaImage } from "@react-icons/all-files/fa/FaImage";
import { FaFilm } from "@react-icons/all-files/fa/FaFilm";

import { colors } from "./styles";
import { RedditContext } from "../RedditContext";

interface ImageProps {
  src: string;
  host: string;
  icon: "link" | "image" | "video";
}

export const Image: React.FC<ImageProps> = ({ src, host, icon }) => {
  const { darkMode, options } = useContext(RedditContext);

  const icons = {
    link: <LinkIcon />,
    image: <Icon as={FaImage} />,
    video: <Icon as={FaFilm} />,
  };

  return (
    <WrapItem
      style={{
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors(darkMode).borderColor,
        overflow: "hidden",
        position: "relative",
        width: options.imageScale,
        height: options.imageScale,
      }}
    >
      <Fade in={true}>
        <img
          src={`https://server.shareddit.com:8080/${src}`}
          alt="reddit submission"
        />
      </Fade>
      <Box
        position="absolute"
        background="rgba(0, 0, 0, 0.5)"
        color="#AAAAAA"
        textAlign="center"
        bottom={0}
        width="100%"
        fontSize={
          0.15 *
          Number(options.imageScale.substr(0, options.imageScale.length - 1))
        }
      >
        {icons[icon]} {host}
      </Box>
    </WrapItem>
  );
};
