import React, { useContext } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";

import { RedditContext } from "./RedditContext";

export const ScaleSlider: React.FC = () => {
  const {
    setters: { updateImageScale },
  } = useContext(RedditContext);

  return (
    <Box width="100%">
      {"reddit image size"}
      <Slider
        defaultValue={100}
        min={0}
        max={100}
        step={1}
        onChange={updateImageScale}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};
