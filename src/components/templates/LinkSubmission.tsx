import React from "react";

import { Image } from "./Image";
import { Title } from "./Title";

import { FleshedRedditSubmission } from "../../types";

export const LinkSubmission: React.FC<FleshedRedditSubmission> = ({
  link,
  ...props
}) => {
  if (!link) return <></>;
  const src = link;
  const host = new URL(link).hostname;

  return (
    <>
      <Title
        {...props}
        Content={<Image {...props} src={src} host={host} icon="link" />}
      />
    </>
  );
};
