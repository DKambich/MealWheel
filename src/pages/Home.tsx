import React from "react";
import Navbar from "../components/Navbar";
import { Container, Jumbotron } from "react-bootstrap";
import { routes } from "../constants";

export function Home() {
  return (
    <>
      <Navbar activeTab={routes.HOME} />
      <Container>
        <Jumbotron className="my-4">
          <h1 className="display-4">Welcome to Meal Wheel!</h1>
          <p className="lead">
            Ever have disagreements about where to eat or just simply can't
            decide what sounds good? Then Meal Wheel is the site for you. Meal
            Wheel compiles some of Lafayette's and West Lafayette's best
            restaurants. Meal Wheel also partitions the restaurants by cuisine,
            allowing for finer control of options. As of now, Meal Wheel only
            supports restaurants in our immeadiate vicininty in Indiana.
          </p>
          <hr className="my-4" />
          <p>
            Note that this site is just a fun side project. It is not intended
            to promote any restaurants included, just a compilation of some of
            our favorites.
          </p>
        </Jumbotron>
      </Container>
    </>
  );
}
