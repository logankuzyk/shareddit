import React from "react";
import { Center } from "@chakra-ui/react";

export const DownloadImage: React.FC = () => {
  const src = localStorage.getItem("shareddit-image");
  if (src !== null) {
    return (
      <Center height="100vh">
        <img src={src} />
      </Center>
    );
  } else {
    window.location.href = "/";
    return <></>;
  }
};
