import React from "react";
import { Button } from "@chakra-ui/react";
import { FieldProps } from "formik";

interface DownloadButtonProps {
  download: () => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  download,
  ...props
}) => {
  return (
    <Button
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
    >
      download image
    </Button>
  );
};
