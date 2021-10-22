import React from "react";
import PlayerDetails from "./playerDetails";
import PlayerControls from "./playerControls";
import TestMediaPlayer from "./testMediaPlayer";
import { Box, styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 0,
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

function Player(props) {
  const audioElement = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  // React.useEffect(() => {
  //   if (isPlaying) {
  //     audioElement.current.play();
  //   } else {
  //     audioElement.current.pause();
  //   }
  // });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.lenght - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.lenght;
        }
      });
    }
  };

  return (
    // ROOT
    <Grid container height="calc(100% - 30px)">
      {/* Esquerda */}
      <Grid item xs={2}>
        {/* Container Esquerda */}
        <Grid container height="100%">
          {/* Topo */}
          <Grid
            item
            xs={12}
            style={{ height: "59.45%", backgroundColor: "red" }}
          ></Grid>
          {/* Mid */}
          <Grid
            item
            xs={12}
            style={{ height: "29.72%", backgroundColor: "white" }}
          >
            <CoverImage style={{ backgroundColor: "#181818" }}>
              <img alt="" src={props.currentSongIndex.img_src} />
              {/* Ainda não importando a imagem, sou burro não sei porquê */}
            </CoverImage>
          </Grid>
          {/* Baixo */}
          <Grid
            item
            xs={12}
            style={{ height: "10.83%", backgroundColor: "blue" }}
          ></Grid>
        </Grid>
      </Grid>
      {/* Direita */}
      <Grid item xs={10}>
        {/* Container Direita */}
        <Grid container height="100%">
          {/* Topo */}
          <Grid
            item
            xs={12}
            style={{ height: "calc(100% - 10.83%)", backgroundColor: "green" }}
          ></Grid>
          {/* Baixo */}
          <Grid
            item
            xs={12}
            style={{ height: "10.83%", backgroundColor: "#181818" }}
          >
            <div
              style={{ width: "100%", height: "8%", backgroundColor: "red" }}
            ></div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // <div className="player">
    //   {/* <audio
    //     src={props.songs[props.currentSongIndex.src]}
    //     ref={audioElement}
    //   ></audio>
    //   <TestMediaPlayer
    //     song={props.songs[props.currentSongIndex]}
    //     isPlaying={isPlaying}
    //     setIsPlaying={setIsPlaying}
    //     SkipSong={SkipSong}
    //   /> */}
    // </div>
  );
}

export default Player;
