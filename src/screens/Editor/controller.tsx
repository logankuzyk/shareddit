import React from "react";

import { EditorScreenView } from "./view";

interface EditorScreenControllerProps {}

export const EditorScreenController: React.FC<
  EditorScreenControllerProps
> = ({}) => {
  const handleDownload = async () => {};
  const handleCopy = async () => {};
  const svgToImage = async () => {};

  return <EditorScreenView />;
};
