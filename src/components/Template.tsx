import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";

import { ImageTheme } from "../types";
import { RedditContext } from "./RedditContext";
import templates from "./templates";

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

  const { TitleTemplate, CommentTemplate } = templates.old(data.content.type);

  return (
    <Box style={styles[data.theme]} padding="10px">
      <TitleTemplate />
      {data.content.comments.length > 0 ? (
        <CommentTemplate comments={data.content.comments} />
      ) : (
        <></>
      )}
    </Box>
  );
};
