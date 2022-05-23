import { Text } from "@chakra-ui/react";
import React from "react";

export const SharedditLogo: React.FC = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Text
      cursor="pointer"
      fontFamily="Signika"
      fontSize="5xl"
      fontWeight="semibold"
      onClick={handleClick}
    >
      shareddit
    </Text>
  );
};
