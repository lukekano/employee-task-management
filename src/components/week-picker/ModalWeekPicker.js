import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import WeekPick from "./WeekPick";

export default class ModalWeekPicker extends Component {
  render() {
    return (
      <Modal
        size="md"
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // style={{width: "max-content", margin: "0 auto", display: "inline-block"}}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select Week
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <WeekPick
            onWeekClick={this.props.onWeekClick}
            onDaySelect={this.props.onDaySelect}
          />
        </Modal.Body>
      </Modal>
    );
  }
}
