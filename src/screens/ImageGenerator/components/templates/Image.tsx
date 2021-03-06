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
  host: string | null;
  icon: "link" | "image" | "video";
}

export const Image: React.FC<ImageProps> = ({ src, host, icon }) => {
  const { darkMode, imageScale } = useContext(RedditContext);

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
        width: imageScale,
        height: imageScale,
      }}
    >
      <Fade in={true}>
        <img src={src} alt="reddit submission" />
      </Fade>
      {host === null ? (
        <></>
      ) : (
        <Box
          position="absolute"
          background="rgba(0, 0, 0, 0.5)"
          color="#AAAAAA"
          textAlign="center"
          bottom={0}
          width="100%"
          fontSize={0.15 * Number(imageScale.substr(0, imageScale.length - 1))}
        >
          {icons[icon]} {host}
        </Box>
      )}
    </WrapItem>
  );
};
