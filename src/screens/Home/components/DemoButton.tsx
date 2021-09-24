import React, { useCallback } from "react";
import { FieldProps } from "formik";

import { StyledButton } from "../../shared/components/StyledButton";

export const DemoButton: React.FC<FieldProps> = ({ field, form, ...props }) => {
  const demo = useCallback(() => {
    form.setFieldValue(
      "link",
      "https://reddit.com/r/shareddit_com/comments/pu919w/welcome_to_shareddit/he1a9sb/"
    );
  }, [form]);

  return (
    <StyledButton
      onClick={demo}
      style={{ marginBottom: "var(--chakra-space-4)" }}
    >
      demo
    </StyledButton>
  );
};
