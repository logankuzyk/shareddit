import React from "react";

import { EditorScreenController } from "./controller";

interface EditorScreenProviderProps {}

export const EditorScreenProvider: React.FC<
  EditorScreenProviderProps
> = ({}) => {
  return <EditorScreenController />;
};
