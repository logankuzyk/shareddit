import React from "react";
import { Box } from "@chakra-ui/react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { GenerateButton } from "./GenerateButton";
import { RedditLinkInput } from "./RedditLinkInput";
import { submitLink } from "../submitLink";

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
    <Box width="100%">
      <FormikProvider value={formik}>
        <Form>
          <Field
            name="link"
            component={RedditLinkInput}
            style={{ marginBottom: "var(--chakra-space-8)" }}
          ></Field>
          <Field name="submit" type="submit" component={GenerateButton}></Field>
        </Form>
      </FormikProvider>
    </Box>
  );
};
