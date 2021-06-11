import React from "react";
import { Button } from "@chakra-ui/react";
import { FieldProps, getIn } from "formik";

export const GenerateButton: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
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
      colorScheme="button"
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      _focus={{ borderColor: "brand.focus" }}
    >
      generate
    </Button>
  );
};
