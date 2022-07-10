import React from "react";

import { useEditorData } from "../../contexts/EditorContext";
import { Caption } from "../typography";

export const CommentHeader: React.FC = () => {
  const { commentSort, theme } = useEditorData();

  return (
    <Caption color={theme.contrast[100]} fontWeight={700} paddingX="18px">
      Comments sorted by {commentSort}
    </Caption>
  );
};
