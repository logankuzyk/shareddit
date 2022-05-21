import { Button, Text, Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaRedoAlt } from "react-icons/fa";

// import { RedditContext } from "../../../screens/ImageGenerator/components/RedditContext";

export const RefreshButton: React.FC = () => {
  // const {
  //   setters: { refreshContent },
  // } = useContext(RedditContext);

  return (
    <Button
      // onClick={refreshContent}
      _focus={{ borderColor: "brand.focus" }}
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      backgroundColor={"brand.highlights"}
      border="4px"
      borderColor={"brand.highlights"}
      borderRadius="12px"
      color="brand.input"
      colorScheme="button"
      fontSize="lg"
      minHeight="64px"
      size="md"
      width="100%"
    >
      <Text>refresh reddit content</Text>
      <Box w={2} />
      <FaRedoAlt width={1} />
    </Button>
  );
};
