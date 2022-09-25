import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./swipe.css";

export default class Swipe extends Component {
  state = {
    id: 7492178,
    breed: "german shepherd",
    type: "dog",
    name: "milo",
    age: 10,
    sex: "male",
    images: [
      "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
    ],
    description: "whatever",
    handlerID: 456,
  };

  createInterest = () => {

  }

  getNewPet = () => {

  }

  render() {
    return (
      <div id="swipe-container">
        <div id="image-container">
          <img
            src={this.state.images[0]}
            alt="nothing shown"
            id="picture-shown"
          ></img>
        </div>
        <div id="other-container">
          <div id="info-container">
            <h3 style={{textAlign: "center"}}>Pet Information</h3>
            <p className="info-display">Type: {this.state.type}</p>
            <p className="info-display">Breed: {this.state.breed}</p>
            <p className="info-display">Name: {this.state.name}</p>
            <p className="info-display">Age: {this.state.age}</p>
            <p className="info-display">Sex: {this.state.sex}</p>
            <p className="info-display">Description: {this.state.description}</p>
          </div>
          <div id="swipe-button-container">
            <Button onClick={this.createInterest}>I Am Interested</Button>
            <Button onClick={this.getNewPet}>Go Next</Button>
          </div>
        </div>
      </div>
    );
  }
}
