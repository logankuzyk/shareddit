import React from "react";
import { Box } from "@chakra-ui/react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { GenerateButton } from "./GenerateButton";
import { RedditLinkInput } from "./RedditLinkInput";

export const LinkForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      link: "",
    },
    onSubmit: ({ link }) => {
      alert(`this is a link ${link}`);
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
          <Field name="link" component={RedditLinkInput}></Field>
          <Field name="submit" type="submit" component={GenerateButton}></Field>
        </Form>
      </FormikProvider>
    </Box>
  );
};
