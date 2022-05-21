import { Input } from "@chakra-ui/react";
import { FieldProps, getIn } from "formik";
import React from "react";

export const RedditLinkInput: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const error = Boolean(
    getIn(form.touched, "link") && getIn(form.errors, "link")
  );

  return (
    <Input
      _focus={{ borderColor: error ? "error.400" : "brand.focus" }}
      _hover={
        error ? { borderColor: "error.600" } : { borderColor: "button.600" }
      }
      backgroundColor="brand.input"
      border="4px"
      borderColor={error ? "error.400" : "button.500"}
      borderRadius="12px"
      colorScheme="button"
      fontWeight="semibold"
      marginTop="var(--chakra-space-6)"
      minHeight="64px"
      placeholder="enter reddit URL"
      size="lg"
      textAlign="center"
      //Form validation
      // isInvalid={error}
      {...field}
      {...props}
    />
  );
};
