import React from "react";

import { Caption } from "../../../typography/Caption";
import { BadgeContainer } from "./BadgeContainer";

interface AwardsProps {
  count: number;
}

export const Awards: React.FC<AwardsProps> = ({ count }) => {
  return (
    <BadgeContainer>
      <Caption>{count} awards</Caption>
    </BadgeContainer>
  );
};
