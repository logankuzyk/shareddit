import { Button } from "@chakra-ui/react";
import React from "react";

export const GoBackButton: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Button
      _focus={{ borderColor: "brand.focus" }}
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      backgroundColor="brand.highlights"
      border="4px"
      borderColor="brand.highlights"
      borderRadius="12px"
      color="brand.input"
      minHeight="64px"
      size="lg"
      width="100%"
      onClick={goBack}
    >
      go back
    </Button>
  );
};
