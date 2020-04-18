import React, { Component, Fragment } from "react";
import Winwheel from "./libraries/winwheel";

function App() {
  return (
    <div>
      <Wheel></Wheel>
    </div>
  );
}

class Wheel extends Component {
  state = { wheel: null };
  componentDidMount() {
    this.setState({
      wheel: new Winwheel({
        canvasId: "myCanvas",
        numSegments: 4,
        segments: [
          { fillStyle: "#eae56f", text: "One" },
          { fillStyle: "#89f26e", text: "Two" },
          { fillStyle: "#7de6ef", text: "Three" },
          { fillStyle: "#e7706f", text: "Four" },
        ],
        animation: {
          type: "spinToStop",
          duration: 4,
          spins: 1.5,
          callbackFinished: this.alertWheel,
        },
      }),
    });
  }

  alertWheel = (test) => {
    console.log(test);
    alert("You have selected " + test.text);
  };

  spinWheel = () => {
    this.state.wheel.animation.spins = 8 + 1 * Math.random();
    this.state.wheel.startAnimation();
  };

  resetWheel = () => {
    this.state.wheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
    this.state.wheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
    this.state.wheel.draw();
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.spinWheel}>Spin Me</button>
        <button onClick={this.resetWheel}>Reset</button>
        <canvas id="myCanvas" width={250} height={250} />
      </Fragment>
    );
  }
}

export default App;
