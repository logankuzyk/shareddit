import React from "react";
import * as yup from "yup";
import { Box, Center } from "@chakra-ui/react";
import { Field, Form, FormikProvider, useFormik } from "formik";

import { SharedditView } from "../../views/SharedditView";
import { Heading } from "../../components/typography/Heading";
import { GenerateButton } from "../../components/input/buttons/GenerateButton";
import { RedditLinkInput } from "../../components/input/RedditLinkInput";
import { DonateModal } from "../../components/modals/DonateModal";

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
        <Box width="100%" maxWidth="80vw">
          <FormikProvider value={formik}>
            <Form>
              <Field
                name="link"
                component={RedditLinkInput}
                style={{ marginBottom: "var(--chakra-space-8)" }}
              />
              <Field
                name="submit"
                type="submit"
                component={GenerateButton}
                style={{ marginBottom: "var(--chakra-space-4)" }}
              />
              <DonateModal />
            </Form>
          </FormikProvider>
        </Box>
      </Center>
    </SharedditView>
  );
};
