import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";

import { RedditContext } from "./RedditContext";

export const RefreshButton: React.FC = () => {
  const {
    setters: { refreshContent },
  } = useContext(RedditContext);

  return (
    <Button
      onClick={refreshContent}
      size="lg"
      minHeight="64px"
      color="brand.input"
      backgroundColor={"brand.highlights"}
      border="4px"
      borderColor={"brand.highlights"}
      width="100%"
      borderRadius="12px"
      colorScheme="button"
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      _focus={{ borderColor: "brand.focus" }}
      fontSize="lg"
    >
      refresh reddit content
    </Button>
  );
};
