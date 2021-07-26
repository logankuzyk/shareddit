import React from "react";

import { Image } from "./Image";
import { Title } from "./Title";

import { FleshedRedditSubmission } from "../../types";

export const LinkSubmission: React.FC<FleshedRedditSubmission> = ({
  link,
  thumbnail,
  ...props
}) => {
  let src = "";
  let host = "";

  if (!thumbnail) return <></>;

  if (Array.isArray(thumbnail)) {
    src = thumbnail[0];
  } else {
    src = thumbnail;
  }

  if (link !== null) host = new URL(link).hostname;

  return (
    <>
      <Title
        {...props}
        Content={<Image {...props} src={src} host={host} icon="link" />}
      />
    </>
  );
};
