import React from "react";
import { Button } from "@chakra-ui/react";

interface GenerateButtonProps {}

export const GenerateButton: React.FC<GenerateButtonProps> = ({}) => {
  return (
    <Button
      size="lg"
      minHeight="64px"
      color="brand.input"
      backgroundColor="brand.highlights"
      border="4px"
      borderColor="brand.highlights"
      width="100%"
      borderRadius="12px"
      colorScheme="brand"
    >
      generate
    </Button>
  );
};
