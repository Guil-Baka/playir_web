import React from "react";
import PlayerDetails from "./playerDetails";
import PlayerControls from "./playerControls";
import TestMediaPlayer from "./testMediaPlayer";

function Player(props) {
  const audioElement = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

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
    <div className="player">
      <audio
        src={props.songs[props.currentSongIndex.src]}
        ref={audioElement}
      ></audio>
      <h4>Playing Now</h4>
      <TestMediaPlayer
        song={props.songs[props.currentSongIndex]}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>Next up:</strong> {props.songs[props.nextSongIndex].title} by
        {props.songs[props.nextSongIndex].artist}
      </p>
    </div>
  );
}

export default Player;
