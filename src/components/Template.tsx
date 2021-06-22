import { Box } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { Text } from "@chakra-ui/react";

import { Comment } from "./templates/Comment";
import { FleshedRedditSubmission, ImageTheme } from "../types";
import { ImageSubmission } from "./templates/ImageSubmission";
import { RedditContext } from "./RedditContext";

type RedditThemePropertyMap<T> = {
  [key in ImageTheme]: T;
};

const styles: RedditThemePropertyMap<object> = {
  old: {
    backgroundColor: "white",
    textAlign: "left",
    fontFamily: "verdana, arial, helvetica, sans-serif",
    fontSize: "x-small",
    lineHeight: "normal",
  },
  new: {},
};

export const Template: React.FC = () => {
  const data = useContext(RedditContext);

  return (
    <Box style={styles[data.theme]}>
      <ImageSubmission />
      {data.content.comments.length > 0 ? (
        <Comment comments={data.content.comments} />
      ) : (
        <></>
      )}
    </Box>
  );
};
