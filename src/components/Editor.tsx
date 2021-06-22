import React, { useState, useEffect } from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";
import { Field, FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { getParams } from "../util/getParams";
import { Template } from "./Template";
import { FleshedRedditSubmission } from "../types";
import { RedditLinkInput } from "./input/RedditLinkInput";
import { GenerateButton } from "./input/GenerateButton";

export const Editor: React.FC = () => {
  const [params, setParams] = useState<FleshedRedditSubmission | null>(null);
  const [error, setError] = useState<{ message: string }>({ message: "" });

  const formik = useFormik({
    initialValues: {
      link: "",
    },
    onSubmit: () => {},
    validationSchema: yup.object({
      link: yup
        .string()
        .required()
        .matches(/reddit.com/, "Must be a reddit URL"),
    }),
  });

  useEffect(() => {
    getParams().then((urlParams) => {
      if (!(typeof urlParams == "string")) setParams(urlParams);
      else setError({ message: urlParams });
    });
  }, []);

  return (
    <Box textAlign="center" fontSize="xl" width="100%">
      <Grid minH="100vh" p={3}>
        <VStack minWidth="lg" maxW="lg" marginX="auto" spacing={4}>
          <FormikProvider value={formik}>
            <Field name="link" component={RedditLinkInput} />
            {params ? (
              <Template content={params} />
            ) : error.message ? (
              <Text>{error.message}</Text>
            ) : (
              <Text>Loading...</Text>
            )}
            <Field name="submit" component={GenerateButton} />
          </FormikProvider>
        </VStack>
      </Grid>
    </Box>
  );
};
