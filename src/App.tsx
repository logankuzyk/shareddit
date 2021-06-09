import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Input,
  Button,
} from "@chakra-ui/react";
import { theme } from "./style/theme";
import "./style/fonts.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={8}>
          <Text fontFamily="Signika" fontSize="5xl" fontWeight="semibold">
            shareddit
          </Text>
          <Text fontSize="5xl" fontWeight="semibold">
            The best way to screenshot reddit content.
          </Text>
          <Input
            size="lg"
            minHeight="64px"
            placeholder="enter reddit URL"
            backgroundColor="brand.input"
            textAlign="center"
            fontWeight="semibold"
            border="4px"
            borderColor="brand.highlights"
          ></Input>
          <Button
            size="lg"
            minHeight="64px"
            color="brand.input"
            backgroundColor="brand.highlights"
            border="4px"
            borderColor="brand.highlights"
            width="100%"
          >
            generate
          </Button>
          <Button>How it works{"\n"}</Button>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
