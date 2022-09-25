import React, { Component } from "react";
import Animal from "../../components/animal";
import Popup from "../popup/popup";
import "./interest.css";

export default class Interest extends Component {
  state = {
    trigger: false,
    popUpID: 0,
    interest: [
      {
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
      },
      {
        id: 8213783,
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
      },
      {
        id: 83279174,
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
      },
      {
        id: 481217489,
        breed: "german shepherd",
        type: "dog",
        name: "milo",
        age: 10,
        sex: "male",
        images: [
          "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
        ],
        description:
          "whatdfkajflasdfjklasdfjlaksd aldkfj alkdfj alskdfj ladkfjadlkf jasldkjf lasdkfjadlkfj alkdjflkasdfjlkasdfj lkasdfj lakdsfjaslkdfjlakdfjlkasdjf alkdsfj dklsjf lkajdflkafdjever",
        handlerID: 456,
      },
    ],
  };

  createPopUp = (handlerID) => {
    this.setState({ trigger: true, popUpID: handlerID });
  };

  closePopUp = () => {
    this.setState({ trigger: false, popUpID: 0 });
  };

  deleteInterest = (id) => {
    this.setState({
      interest: this.state.interest.filter((animal) => animal.id !== id),
    });
  };

  render() {
    return (
      <div>
        {!this.state.trigger ? (
          <div id="interest-container">
            {this.state.interest.map((animal) => {
              return (
                <Animal
                  key={animal.id}
                  animal={animal}
                  // index={index}
                  onChat={() => this.createPopUp(animal.handlerID)}
                  onDelete={() => this.deleteInterest(animal.id)}
                ></Animal>
              );
            })}
          </div>
        ) : (
          <Popup
            handlerID={this.state.popUpID}
            onClose={this.closePopUp}
          ></Popup>
        )}
      </div>
    );
  }
}
