import { Text } from "@chakra-ui/react";
import React from "react";

export const SharedditLogo: React.FC = () => {
  const onClick = () => {
    window.location.pathname = "/";
  };

  return (
    <Text
      cursor="pointer"
      fontFamily="Signika"
      fontSize="5xl"
      fontWeight="semibold"
      onClick={onClick}
    >
      shareddit
    </Text>
  );
};
