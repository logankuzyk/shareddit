import React from "react";
import { Button } from "@chakra-ui/react";

export const GoBackButton: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

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
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      _focus={{ borderColor: "brand.focus" }}
      onClick={goBack}
    >
      go back
    </Button>
  );
};
