import React, { useState, useEffect } from "react";

import { useEditorData } from "../../../../contexts/EditorContext";

interface ImageProps {
  src: string;
}

export const Image: React.FC<ImageProps> = ({ src }) => {
  const { imageScale } = useEditorData();
  const [corsSrc, setCorsSrc] = useState<string>(src);

  useEffect(() => {
    if (window) {
      setCorsSrc("/reddit-image/" + src.replace("https://", ""));
    }
  }, [src]);

  return (
    <img
      alt="content"
      src={corsSrc}
      style={{
        height: imageScale,
        width: imageScale,
        borderWidth: "1px",
        borderRadius: "8px",
      }}
    />
  );
};
