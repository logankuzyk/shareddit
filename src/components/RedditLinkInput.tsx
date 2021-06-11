import React from "react";
import { Input } from "@chakra-ui/react";

interface RedditLinkInputProps {}

export const RedditLinkInput: React.FC<RedditLinkInputProps> = ({}) => {
  return (
    <Input
      size="lg"
      minHeight="64px"
      placeholder="enter reddit URL"
      backgroundColor="brand.input"
      textAlign="center"
      fontWeight="semibold"
      border="4px"
      borderColor="brand.highlights"
      borderRadius="12px"
      colorScheme="button"
      _hover={{ borderColor: "button.600" }}
      _focus={{ borderColor: "brand.focus" }}
    ></Input>
  );
};
