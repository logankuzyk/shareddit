import React, { useEffect, useState } from "react";
import { Input, useToast } from "@chakra-ui/react";
import { FieldProps, getIn, useField } from "formik";

export const RedditLinkInput: React.FC<FieldProps> = ({
  label,
  helpText,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  const toast = useToast();

  if (showFeedback) {
    toast({
      id: "form-validation",
      status: "error",
      title: helpText,
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Input
      size="lg"
      minHeight="64px"
      placeholder="enter reddit URL"
      backgroundColor="brand.input"
      textAlign="center"
      fontWeight="semibold"
      marginBottom="var(--chakra-space-8)"
      border="4px"
      borderColor="brand.highlights"
      borderRadius="12px"
      colorScheme="button"
      _hover={{ borderColor: "button.600" }}
      _focus={{ borderColor: "brand.focus" }}
      errorBorderColor="red.500"
      isInvalid={showFeedback}
      onFocus={handleFocus}
      {...field}
      {...props}
    ></Input>
  );
};
