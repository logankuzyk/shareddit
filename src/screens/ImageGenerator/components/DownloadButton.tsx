import React from "react";
import { Button } from "@chakra-ui/react";

interface DownloadButtonProps {
  download: () => void;
  loading: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  download,
  loading,
}) => {
  return (
    <Button
      isLoading={loading}
      onClick={download}
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
      download image
    </Button>
  );
};
