import { Box, Center } from "@chakra-ui/react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import React from "react";
import * as yup from "yup";

import { GenerateButton } from "../../components/input/buttons/GenerateButton";
import { RedditLinkInput } from "../../components/input/RedditLinkInput";
import { Heading } from "../../components/typography/Heading";
import { SharedditView } from "../../views/SharedditView";

interface HomeScreenViewProps {
  submitHandler: (input: string) => void;
}

export const HomeScreenView: React.FC<HomeScreenViewProps> = ({
  submitHandler,
}) => {
  const formik = useFormik({
    initialValues: {
      link: "",
    },
    onSubmit: ({ link }, actions) => {
      submitHandler(link);
      actions.setSubmitting(false);
    },
    validationSchema: yup.object({
      link: yup
        .string()
        .required()
        .matches(/reddit.com/, "Must be a reddit URL"),
    }),
  });

  return (
    <SharedditView>
      <Heading>The best way to screenshot reddit content.</Heading>
      <Center>
        <Box maxWidth="80vw" width="100%">
          <FormikProvider value={formik}>
            <Form>
              <Field
                component={RedditLinkInput}
                name="link"
                style={{ marginBottom: "var(--chakra-space-8)" }}
              />
              <Field
                component={GenerateButton}
                name="submit"
                style={{ marginBottom: "var(--chakra-space-4)" }}
                type="submit"
              />
            </Form>
          </FormikProvider>
        </Box>
      </Center>
    </SharedditView>
  );
};
