import React from "react";

import { Image } from "./Image";
import { Title } from "./Title";

import { FleshedRedditSubmission } from "../../../../types";

export const LinkSubmission: React.FC<FleshedRedditSubmission> = ({
  link,
  thumbnail,
  ...props
}) => {
  if (!thumbnail) return <></>;
  const src = Array.isArray(thumbnail) ? thumbnail[0] : thumbnail;

  const host = link !== null ? new URL(link).hostname : null;

  console.log(host);

  return (
    <>
      <Title {...props} Content={<Image src={src} host={host} icon="link" />} />
    </>
  );
};
