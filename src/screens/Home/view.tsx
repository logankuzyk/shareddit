import { Box, Center } from "@chakra-ui/react";
import React from "react";
import * as yup from "yup";

import { Heading } from "../../components/typography/Heading";
import { SharedditView } from "../../views/SharedditView";

interface HomeScreenViewProps {
  onSubmit: (input: string) => void;
}

export const HomeScreenView: React.FC<HomeScreenViewProps> = () => {
  return (
    <SharedditView>
      <Heading>The best way to screenshot reddit content.</Heading>
      <Center>
        <Box maxWidth="80vw" width="100%"></Box>
      </Center>
    </SharedditView>
  );
};
