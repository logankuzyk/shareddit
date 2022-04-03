import React, { useContext } from "react";
import { Button, Text, Box } from "@chakra-ui/react";
import { FaRedoAlt } from "react-icons/fa";

// import { RedditContext } from "../../../screens/ImageGenerator/components/RedditContext";

export const RefreshButton: React.FC = () => {
  // const {
  //   setters: { refreshContent },
  // } = useContext(RedditContext);

  return (
    <Button
      // onClick={refreshContent}
      size="md"
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
      <Text>refresh reddit content</Text>
      <Box w={2} />
      <FaRedoAlt width={1} />
    </Button>
  );
};
