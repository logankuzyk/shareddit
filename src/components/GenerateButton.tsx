import React from "react";
import { Button } from "@chakra-ui/react";
import { FieldProps, getIn } from "formik";

export const GenerateButton: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const error = Boolean(
    getIn(form.touched, "link") && getIn(form.errors, "link")
  );

  return (
    <Button
      size="lg"
      minHeight="64px"
      color="brand.input"
      backgroundColor={error ? "error.400" : "brand.highlights"}
      border="4px"
      borderColor={error ? "error.400" : "brand.highlights"}
      width="100%"
      borderRadius="12px"
      colorScheme="button"
      _hover={
        error
          ? { borderColor: "error.600", backgroundColor: "error.500" }
          : { borderColor: "button.600", backgroundColor: "button.600" }
      }
      _focus={error ? {} : { borderColor: "brand.focus" }}
      {...props}
      {...field}
    >
      {error ? "please enter a reddit URL" : "generate image"}
    </Button>
  );
};
