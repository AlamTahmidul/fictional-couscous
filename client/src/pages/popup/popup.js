import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./popup.css";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handlerID: props.handlerID,
      handlerName: "Pet Center",
      handlerAddress: "3 Split Rail Ln, East Setauket, NY, 11733",
      handlerPhone: "1234567890",
      hoursOperation: "9AM-5PM",
    };
  }

  getHandler = () => {};

  render() {
    return (
      <div className="popup">
        <Card>
          <Card.Body className="popup-inner">
            <p className="popup-text">{this.state.handlerName}</p>
            <p className="popup-text">{this.state.handlerAddress}</p>
            <p className="popup-text">{this.state.handlerPhone}</p>
            <p className="popup-text">{this.state.hoursOperation}</p>
            <Button onClick={this.props.onClose} id="close-button">Close Window</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
