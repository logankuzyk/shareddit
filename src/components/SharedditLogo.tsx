import React from "react";
import { Text } from "@chakra-ui/react";

export const SharedditLogo: React.FC = () => {
  const onClick = () => {
    window.location.pathname = "/";
  };

  return (
    <Text
      fontFamily="Signika"
      fontSize="5xl"
      fontWeight="semibold"
      onClick={onClick}
    >
      shareddit
    </Text>
  );
};
