import React, { Component } from "react";
import CircleType from "circletype";
import anime from "animejs/lib/anime.es.js";

export default class Loader extends Component {
  /**
   * Contsurctor where props can be passed and where we define the refs to access to DOM elements
   */
  constructor(props) {
    super(props);

    // this.inputRef.current is null here, need the component to be mounted to be able to use it
    this.inputRef = React.createRef();
  }

  /**
   * onMount function, called when the component is loaded and mounted
   */
  componentDidMount() {
    // Circle loading text setup
    const circularText = new CircleType(this.inputRef.current);

    // VER$E text animation
    anime({
      targets: ".loaderTextCharacter",
      top: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(50, { start: 600 }),
    });
  }

  render() {
    return (
      <div className="loader">
        <div className="loaderWrapper">
          <div id="loaderSpinningText" ref={this.inputRef}>
            LOADING ☺☺☺ LOADING ☺☺☺ LOADING ☺☺☺ LOADING ☺☺☺ LOADING ☺☺☺ 
          </div>
          <p className="loaderText">
            <span className="loaderTextCharacter">V</span>
            <span className="loaderTextCharacter">E</span>
            <span className="loaderTextCharacter">R</span>
            <span className="loaderTextCharacter">$</span>
            <span className="loaderTextCharacter">E</span>
          </p>
        </div>
      </div>
    );
  }
}
