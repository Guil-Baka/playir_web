import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";

import React from "react";
import { IconButton } from "@mui/material";
import {
  FastForwardRounded,
  FastRewindRounded,
  PauseRounded,
  PlayArrowRounded,
} from "@mui/icons-material";
import { useTheme } from "@mui/system";

function PlayerControls() {
  const [paused, setPaused] = React.useState(0);

  const theme = useTheme();
  return (
    <div className="playerControls">
      <IconButton aria-label="previous song">
        <FastRewindRounded
          color="primary.mainIconColor"
          fontSize="large"
          // htmlColor={theme.palette.primary.mainIconColor}
        />
      </IconButton>
      <IconButton
        aria-label={paused ? "play" : "pause"}
        onClick={() => setPaused(!paused)}
      >
        {paused ? (
          <PlayArrowRounded sx={{ fontSize: "3rem" }} />
        ) : (
          <PauseRounded
            sx={{ fontSize: "3rem" }}
            color="primary.mainIconColor"
          />
        )}
      </IconButton>
      <IconButton aria-label="next song">
        <FastForwardRounded
          color="primary.mainIconColor"
          fontSize="large"
          // htmlColor={theme.palette.primary.mainIconColor}
        />
      </IconButton>
    </div>
  );
}

export default PlayerControls;
