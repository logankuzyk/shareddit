import React from "react";
import { Button } from "@chakra-ui/react";

interface CopyButtonProps {
  copy: () => void;
  loading: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ copy, loading }) => {
  return (
    <Button
      id="copy"
      isLoading={loading}
      onClick={copy}
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
      copy image
    </Button>
  );
};
