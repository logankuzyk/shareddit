import React from "react";

import { useEditorData } from "../../contexts/EditorContext";
import { Caption } from "../typography";

export const ViaShareddit: React.FC = () => {
  const today = new Date().toDateString();
  const { theme } = useEditorData();

  return (
    <Caption color={theme.contrast[100]} fontWeight={700} paddingX="18px">
      Captured via shareddit.com on {today}
    </Caption>
  );
};
