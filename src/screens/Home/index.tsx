import React from "react";
import { Text } from "@chakra-ui/react";

import { LinkForm } from "./components/LinkForm";
import { SharedditView } from "../shared/components/SharedditView";

export const Home: React.FC = () => {
  return (
    <SharedditView>
      <Text fontSize="4xl" fontWeight="semibold">
        The best way to screenshot reddit content.
      </Text>
      <LinkForm />
    </SharedditView>
  );
};
