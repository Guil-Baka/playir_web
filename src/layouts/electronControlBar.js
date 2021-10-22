import { Box, styled } from "@mui/system";
import React from "react";
import {
  CloseRounded,
  Crop169Rounded,
  CropSquareRounded,
  MinimizeRounded,
} from "@mui/icons-material";
// import { Button, IconButton } from "@mui/material";
// import { closeWindow } from "./electronControlBarFunctions";
// import * as Electron from "electron";
const { ipcRenderer } = window.require("electron");

const Button = styled("span")(({ theme }) => ({
  width: 24,
  height: 24,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(0.5),
  paddingTop: theme.spacing(0.5),
  boxShadow: "none",
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.45)",
  },
  zIndex: 10,
}));

function ElectronControlBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "30px",
        backgroundColor: "#181818",
        display: "flex",
      }}
    >
      <Box
        flexGrow={1}
        style={{
          WebkitAppRegion: "drag",
          height: 30,
        }}
      ></Box>
      <Box style={{ width: (24 + 8 + 4) * 3, display: "flex" }}>
        <Button
          aria-label="minimize"
          style={{ position: "relative" }}
          onClick={() => {
            ipcRenderer.invoke("min-window");
          }}
        >
          <MinimizeRounded
            style={{
              color: "#ffffffff",
              position: "absolute",
              top: "50%",
              transform: "translateY(-70%)",
            }}
          />
        </Button>
        <Button
          aria-label="maximize"
          onClick={() => {
            ipcRenderer.invoke("max-window");
          }}
        >
          <CropSquareRounded style={{ color: "#ffffffff" }} />
        </Button>
        <Button
          aria-label="close"
          onClick={() => {
            ipcRenderer.invoke("close-window");
          }}
        >
          <CloseRounded style={{ color: "#ffffffff" }} />
        </Button>
      </Box>
    </Box>
  );
}

export default ElectronControlBar;
