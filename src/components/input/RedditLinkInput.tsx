import React from "react";
import { Input } from "@chakra-ui/react";
import { FieldProps, getIn } from "formik";

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
      size="lg"
      minHeight="64px"
      placeholder="enter reddit URL"
      backgroundColor="brand.input"
      textAlign="center"
      // marginBottom="var(--chakra-space-8)"
      fontWeight="semibold"
      border="4px"
      borderColor={error ? "error.400" : "button.500"}
      borderRadius="12px"
      colorScheme="button"
      _hover={
        error ? { borderColor: "error.600" } : { borderColor: "button.600" }
      }
      _focus={{ borderColor: error ? "error.400" : "brand.focus" }}
      //Form validation
      // isInvalid={error}
      {...field}
      {...props}
    />
  );
};
