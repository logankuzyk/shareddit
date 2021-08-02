import React from "react";
import { Wrap } from "@chakra-ui/react";

import { Image } from "./Image";
import { Title } from "./Title";

import { FleshedRedditSubmission } from "../../types";

export const ImageSubmission: React.FC<FleshedRedditSubmission> = ({
  link,
  thumbnail,
  type,
  ...props
}) => {
  if (thumbnail === null || link === null) return <></>;
  const host = new URL(link).hostname;

  let count = 0;

  return (
    <>
      <Title
        {...props}
        Content={
          type === "album" && Array.isArray(thumbnail) ? (
            <Wrap
              shouldWrapChildren={false}
              flexDirection="column"
              alignItems="stretch"
            >
              {thumbnail.map((src) => (
                <Image
                  {...props}
                  src={src}
                  host={null}
                  icon="image"
                  key={count++}
                />
              ))}
            </Wrap>
          ) : Array.isArray(thumbnail) ? (
            <></>
          ) : (
            <Image {...props} src={thumbnail} host={host} icon="image" />
          )
        }
      />
    </>
  );
};
