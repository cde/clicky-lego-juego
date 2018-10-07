//sets up the reusable Hero component
import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver: false,
        };
    }
  render() {
    return (
      <div className="hero is-small is-dark is-bold">
          <div className="hero-body">
              <div className="container">
                  <div className="columns is-vcentered">
                      <div className="column is-two-thirds">
                          <h1 className="title"> Explore our Legos </h1>
                          <h2 className="subtitle"> Click on an image to earn points, but don't click on any more than once! </h2>
                      </div>
                      <div className="column is-two-thirds">
                          <h1 className="subtitle">Score:  {this.props.score} </h1>
                          <h2 className="subtitle"> {this.props.message} </h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Hero;

