import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { Comment } from "./templates/Comment";
import { FleshedRedditSubmission, ImageTheme } from "../types";
import { ImageSubmission } from "./templates/ImageSubmission";

type Styles = {
  [key in ImageTheme]: object;
}

const styles: Styles = {
  old: {
    backgroundColor: "white",
    textAlign: "left",
    fontFamily: "verdana, arial, helvetica, sans-serif",
    fontSize: "x-small",
    lineHeight: "normal",
  },
  new: {},
}
interface TemplateProps {
  content: FleshedRedditSubmission;
}

export const Template: React.FC<TemplateProps> = ({ content }) => {
  const [theme, setTheme] = useState<ImageTheme>("old");
  const [type, setType] = useState(content.type);

  return (
    <Box
      style={styles[theme]}
    >
      <ImageSubmission post={content} />
      {content.comments.length > 0 ? (
        <Comment comments={content.comments}></Comment>
      ) : (
        <></>
      )}
    </Box>
  );
};
