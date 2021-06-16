import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { FleshedRedditSubmission, ImageTheme } from "../types";

export const Template: React.FC<FleshedRedditSubmission> = ({
  ...props
}: FleshedRedditSubmission) => {
  const [theme, setTheme] = useState<ImageTheme>("old");
  const [type, setType] = useState("");

  return <Box></Box>;
};
