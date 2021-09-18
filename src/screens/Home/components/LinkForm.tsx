import React from "react";
import { Box } from "@chakra-ui/react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { GenerateButton } from "./GenerateButton";
import { RedditLinkInput } from "./RedditLinkInput";
import { submitLink } from "../../../submitLink";
import { DonateModal } from "./DonateModal";

export const LinkForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      link: "",
    },
    onSubmit: ({ link }, actions) => {
      submitLink(link);
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
    <Box width="100%" maxWidth="80vw">
      <FormikProvider value={formik}>
        <Form>
          <Field
            name="link"
            component={RedditLinkInput}
            style={{ marginBottom: "var(--chakra-space-8)" }}
          ></Field>
          <Field
            name="submit"
            type="submit"
            component={GenerateButton}
            style={{ marginBottom: "var(--chakra-space-4)" }}
          ></Field>
          <DonateModal />
        </Form>
      </FormikProvider>
    </Box>
  );
};
