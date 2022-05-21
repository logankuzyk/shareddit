import { Text } from "@chakra-ui/react";
import React from "react";

import { GoBackButton } from "../components/input/buttons/GoBackButton";

export const NotFound: React.FC = () => {
  return (
    <>
      <Text fontSize="5xl" fontWeight="semibold">
        404 - not found
      </Text>
      <GoBackButton />
    </>
  );
};
