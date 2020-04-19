import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

export class Wheel extends Component {
  state = { wheel: null, spinning: false };

  componentDidMount() {
    const { segments } = this.props;

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
    console.log("Unmount");
    this.state.wheel.draw();
    this.setState({ wheel: null });
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

  render() {
    return (
      <Container>
        <Col>
          <div className="d-flex p-4 justify-content-center">
            <canvas id="wheelCanvas" width={500} height={500} />
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
