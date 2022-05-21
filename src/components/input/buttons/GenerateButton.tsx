import { Button } from "@chakra-ui/react";
import { FieldProps, getIn } from "formik";
import React from "react";

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
      _focus={error ? {} : { borderColor: "brand.focus" }}
      _hover={
        error
          ? { borderColor: "error.600", backgroundColor: "error.500" }
          : { borderColor: "button.600", backgroundColor: "button.600" }
      }
      backgroundColor={error ? "error.400" : "brand.highlights"}
      border="4px"
      borderColor={error ? "error.400" : "brand.highlights"}
      borderRadius="12px"
      color="brand.input"
      colorScheme="button"
      isLoading={form.isSubmitting}
      minHeight="64px"
      size="lg"
      width="100%"
      {...props}
      {...field}
    >
      {error ? "please enter a reddit URL" : "generate image"}
    </Button>
  );
};
