import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";

export class Wheel extends Component {
  state = { wheel: null, spinning: false };

  componentDidMount() {
    const { segments } = this.props;
    if (this.state.wheel == null) {
      let wheel = new window.Winwheel({
        canvasId: "wheelCanvas",
        responsive: true,
        drawText: true,
        numSegments: segments.length,
        segments: segments,
        pins: true,
        animation: {
          type: "spinToStop",
          callbackFinished: this.onSpinEnd,
          callbackAfter: this.drawColourTriangle,
        },
        clearTheCanvas: false,
      });

      this.setState(
        {
          wheel,
        },
        () => {
          this.state.wheel.draw();
          setTimeout(this.drawColourTriangle, 1);
        }
      );
    }
  }

  componentWillUnmount() {
    this.state.wheel.stopAnimation(false);
  }

  onSpinEnd = (selectedSegment) => {
    if (this.props.onSpinEnd) this.props.onSpinEnd(selectedSegment);
    this.resetWheel();
    this.state.wheel.draw();
    this.drawColourTriangle();
  };

  spinWheel = () => {
    let wheel = this.state.wheel;
    wheel.animation.spins = 8 + 1 * Math.random();

    this.setState({ wheel, spinning: true }, () =>
      this.state.wheel.startAnimation()
    );
  };

  resetWheel = () => {
    this.state.wheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
    let wheel = this.state.wheel;
    wheel.rotationAngle = wheel.rotationAngle % 360; // Re-set the wheel angle to 0 degrees.
    this.setState({ wheel, spinning: false }, () => {
      this.state.wheel.draw();
      this.drawColourTriangle();
    });
  };

  drawColourTriangle = () => {
    // Get context used by the wheel.
    // let ctx = this.state.wheel.ctx;
    let ctx = this.state.wheel.canvas.getContext("2d");
    let scaleFactor = this.state.wheel.scaleFactor;

    ctx.strokeStyle = "black"; // Set line colour.
    ctx.fillStyle = "red"; // Set fill colour.
    ctx.lineWidth = 3;
    let width = ctx.canvas.width / 2;
    let height = (ctx.canvas.height * 0.05) / 2;
    ctx.beginPath(); // Begin path.
    ctx.moveTo(width - height * scaleFactor * 0.25, 1); // Move to initial position.
    ctx.lineTo(width + height * scaleFactor * 0.25, 1); // Draw lines to make the shape.
    ctx.lineTo(width, height * scaleFactor);
    ctx.lineTo(width - height * scaleFactor * 0.25, 1);
    ctx.stroke(); // Complete the path by stroking (draw lines).
    ctx.fill(); // Then fill.
  };

  render() {
    if (this.state.wheel) this.drawColourTriangle();
    let size = Math.min(window.innerWidth * 0.98, window.innerHeight, 500);
    return (
      <Col>
        <Row className="justify-content-center py-4" noGutters>
          <canvas
            id="wheelCanvas"
            data-responsiveScaleHeight="true" /* Optional Parameters */
            width={size}
            height={size}
          />
        </Row>
        <Row className="justify-content-around">
          <Button disabled={this.state.spinning} onClick={this.spinWheel}>
            Spin Me
          </Button>
        </Row>
      </Col>
    );
  }
}
