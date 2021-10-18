import React from "react";
import PlayerDetails from "./playerDetails";
import PlayerControls from "./playerControls";
import TestMediaPlayer from "./testMediaPlayer";

function Player(props) {
  return (
    <div className="player">
      <audio></audio>
      <h4>Playing Now</h4>
      <TestMediaPlayer img={props.song.img_src} song={props.song} />
      <PlayerDetails song={props.song} />
      <PlayerControls />
      <p>
        <strong>Next up:</strong> {props.nextSong.title} by{" "}
        {props.nextSong.artist}
      </p>
    </div>
  );
}

export default Player;
