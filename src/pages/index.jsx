import React, { Component } from "react";
import Loader from "../components/Loader";
import "../scss/main.scss";

export default class IndexPage extends Component {
  playAudio() {
    console.log("hey");
  }

  render() {
    return (
      <div className="body">
        <button onClick={() => this.playAudio()}>Hello</button>
        <audio className="audio-element" autoPlay muted>
          <source src="../utils/audio/background-music.mp3"></source>
        </audio>
      </div>
    );
  }
}
