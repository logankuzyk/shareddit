import React from "react";

import { useEditorData } from "../../../../contexts/EditorContext";

interface ImageProps {
  src: string;
}

export const Image: React.FC<ImageProps> = ({ src }) => {
  const { imageScale } = useEditorData();

  return (
    <img
      alt="reddit content"
      src={src}
      style={{
        height: imageScale,
        width: imageScale,
        borderWidth: "1px",
        borderRadius: "8px",
      }}
    />
  );
};
