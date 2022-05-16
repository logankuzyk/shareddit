import React from "react";
import { Flex } from "@chakra-ui/react";

import { useEditorContext } from "../contexts/EditorContext";

interface EditorInterfaceProps {}

export const EditorInterface: React.FC<EditorInterfaceProps> = () => {
  const { theme } = useEditorContext();
  const backgroundColor = theme.background["100"];

  return (
    <Flex
      direction="column"
      alignItems="left"
      justifyContent="center"
      textAlign="left"
      backgroundColor={backgroundColor}
    >
      THIS IS THE INTERFACE
    </Flex>
  );
};
