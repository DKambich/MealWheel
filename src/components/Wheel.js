import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

export class Wheel extends Component {
  state = { wheel: null, spinning: false, width: 500, height: 500 };

  componentDidMount() {
    const { segments } = this.props;

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    if (this.state.wheel == null)
      this.setState(
        {
          wheel: new window.Winwheel({
            canvasId: "wheelCanvas",
            responsive: true,
            drawText: true,
            numSegments: segments.length,
            segments: segments,
            animation: {
              type: "spinToStop",
              callbackFinished: this.onSpinEnd,
              callbackAfter: this.drawColourTriangle,
            },
          }),
        },
        () => {
          this.state.wheel.draw();
          setTimeout(this.drawColourTriangle, 1);
        }
      );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  onSpinEnd = (selectedSegment) => {
    if (this.props.onSpinEnd) this.props.onSpinEnd(selectedSegment);
    this.resetWheel();
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
    let ctx = this.state.wheel.ctx;

    ctx.strokeStyle = "navy"; // Set line colour.
    ctx.fillStyle = "aqua"; // Set fill colour.
    ctx.lineWidth = 2;
    let width = ctx.canvas.width / 2;
    let height = ctx.canvas.height * 0.05;
    ctx.beginPath(); // Begin path.
    ctx.moveTo(width - height, 1); // Move to initial position.
    ctx.lineTo(width + height, 1); // Draw lines to make the shape.
    ctx.lineTo(width, height);
    ctx.lineTo(width - height, 1);
    ctx.stroke(); // Complete the path by stroking (draw lines).
    ctx.fill(); // Then fill.
  };

  updateWindowDimensions = () => {
    let dimen = Math.min(window.innerWidth, window.innerHeight, 500);
    this.setState({ width: dimen, height: dimen }, () => {
      if (this.state.wheel) {
        setTimeout(() => {
          this.state.wheel.draw();
          this.drawColourTriangle();
        }, 1);
      }
    });
  };

  render() {
    return (
      <Container>
        <Col>
          <div className="d-flex p-4 justify-content-center">
            <canvas
              id="wheelCanvas"
              width={this.state.width}
              height={this.state.height}
            />
          </div>

          <Row className="justify-content-around">
            <Button disabled={this.state.spinning} onClick={this.spinWheel}>
              Spin Me
            </Button>
          </Row>
        </Col>
      </Container>
    );
  }
}
