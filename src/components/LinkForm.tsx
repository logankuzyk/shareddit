import React from "react";
import { VStack, Text, Button } from "@chakra-ui/react";

import { GenerateButton } from "./GenerateButton";
import { RedditLinkInput } from "./RedditLinkInput";
import { SharedditLogo } from "./SharedditLogo";
import { ArrowDownIcon } from "@chakra-ui/icons";

interface LinkFormProps {}

export const LinkForm: React.FC<LinkFormProps> = ({}) => {
  return (
    <VStack maxW="lg" marginX="auto" spacing={8}>
      <SharedditLogo />
      <Text fontSize="5xl" fontWeight="semibold">
        The best way to screenshot reddit content.
      </Text>
      <RedditLinkInput />
      <GenerateButton />
      <Button marginTop="100%">
        How it works
        {<ArrowDownIcon />}
      </Button>
    </VStack>
  );
};
