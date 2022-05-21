import { Button } from "@chakra-ui/react";
import React from "react";

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
      _focus={{ borderColor: "brand.focus" }}
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      backgroundColor={"brand.highlights"}
      border="4px"
      borderColor={"brand.highlights"}
      borderRadius="12px"
      color="brand.input"
      colorScheme="button"
      fontSize="lg"
      id="download"
      isLoading={loading}
      minHeight="64px"
      size="lg"
      width="100%"
      onClick={download}
    >
      download image
    </Button>
  );
};
