import React from "react";

import { Image } from "./Image";
import { Title } from "./Title";

import { FleshedRedditSubmission } from "../../../../types";

export const LinkSubmission: React.FC<FleshedRedditSubmission> = ({
  link,
  thumbnail,
  title,
  ...props
}) => {
  const src = Array.isArray(thumbnail) ? thumbnail[0] : thumbnail;
  const host = link !== null ? new URL(link).hostname : null;
  const Content = src ? <Image src={src} host={host} icon="link" /> : undefined;
  const outputTitle = Content ? title : title.concat(` (${host})`);

  return <Title {...props} title={outputTitle} Content={Content} />;
};
