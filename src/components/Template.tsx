import { Box } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { Text } from "@chakra-ui/react";

import { Comment } from "./templates/Comment";
import { FleshedRedditSubmission, ImageTheme } from "../types";
import { ImageSubmission } from "./templates/ImageSubmission";
import { RedditContext } from "./RedditContext";
import { useEffect } from "react";

type Styles = {
  [key in ImageTheme]: object;
};

const styles: Styles = {
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

  if (data !== null) {
    return (
      <Box style={styles[data.theme]}>
        <ImageSubmission post={data.content}></ImageSubmission>
        {data.content.comments.length > 0 ? (
          <Comment comments={data.content.comments} />
        ) : (
          <></>
        )}
      </Box>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};
