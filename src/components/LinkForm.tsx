import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { Formik, Field, Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";

import { GenerateButton } from "./GenerateButton";
import { RedditLinkInput } from "./RedditLinkInput";
import { ArrowDownIcon } from "@chakra-ui/icons";

export const LinkForm: React.FC = (props) => {
  const formik = useFormik({
    initialValues: {
      link: "",
    },
    onSubmit: ({ link }) => {},
  });

  const schema = yup.object({
    link: yup
      .string()
      .required()
      .matches(
        /reddit\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "Must be a reddit URL"
      ),
  });

  return (
    <Box width="100%">
      <FormikProvider value={formik}>
        <Formik
          validationSchema={schema}
          initialValues={{ link: "" }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <Field name="link" component={RedditLinkInput}></Field>
              <Field name="submit" component={GenerateButton}></Field>
            </Form>
          )}
        </Formik>
        <Button marginTop="100%">
          How it works
          {<ArrowDownIcon />}
        </Button>
      </FormikProvider>
    </Box>
  );
};
