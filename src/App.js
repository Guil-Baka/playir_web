import * as React from "react";
import Player, { player } from "./components/player";

function App() {
  const [songs] = React.useState([
    {
      title: "Dark Line",
      artist: "Satoshi Bando",
      img_src: "./images/Gt5ogs.jpg",
      src: "./Dark-Line.flac",
    },
    {
      title: "5OUL ON D!SPLAY",
      artist: "Test1",
      img_src: "./images/Gt5ogs.jpg",
      src: "./5OUL-ON-D!SPLAY.flac",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [nextSongIndex, setNextSongIndex] = React.useState(
    currentSongIndex + 1
  );

  React.useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      {/* <div> */}
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
      {/* </div> */}
    </>
  );
}

export default App;
