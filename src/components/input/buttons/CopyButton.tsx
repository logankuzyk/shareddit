import { Button } from "@chakra-ui/react";
import React from "react";

interface CopyButtonProps {
  copy: () => void;
  loading: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ copy, loading }) => {
  return (
    <Button
      _focus={{ borderColor: "brand.focus" }}
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      backgroundColor={"brand.highlights"}
      border="4px"
      borderColor={"brand.highlights"}
      borderRadius="12px"
      color="brand.input"
      colorScheme="button"
      fontSize="lg"
      id="copy"
      isLoading={loading}
      minHeight="64px"
      size="lg"
      width="100%"
      onClick={copy}
    >
      copy image
    </Button>
  );
};
