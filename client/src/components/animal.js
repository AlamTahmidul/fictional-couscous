import React, { Component } from "react";
import "./animal.css";

export default class Animal extends Component {
  render() {
    return (
      <div className="animal-profile">
        <div className="animal-picture-container">
          <img
            src={this.props.animal.images[0]}
            alt={this.props.animal.name + this.props.index}
            className="animal-picture"
          ></img>
        </div>
        <div className="animal-info">
          <p className="animal-info-text">Type: {this.props.animal.type}</p>
          <p className="animal-info-text">Breed: {this.props.animal.breed}</p>
          <p className="animal-info-text">Name: {this.props.animal.name}</p>
          <p className="animal-info-text">Sex: {this.props.animal.sex}</p>
          <p className="description animal-info-text">Description: {this.props.animal.description}</p>
        </div>
        <div className="button-container">
          <div className="button1">
            <img
              src="./chat-dots.svg"
              alt="nothing shown"
              onClick={this.props.onChat}
              className="button1-image"
            ></img>
          </div>
          <div className="button2">
            <img
              src="./trash.svg"
              alt="nothing shown"
              onClick={this.props.onDelete}
              className="button2-image"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
