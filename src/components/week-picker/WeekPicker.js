import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ModalWeekPicker from "./ModalWeekPicker";
import moment from 'moment';

export default class WeekPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicker: false,
      selectedDays: []
    };
  }

  handleWeekClick = (selectedDays) => {
    this.setState({selectedDays, showPicker: false});
  };

  handleDaySelect = (selectedDays) => {
    this.setState({selectedDays, showPicker: false});
  }

  render() {
    const { showPicker, selectedDays } = this.state;
    return (
      <React.Fragment>
        <Button
          variant="primary"
          className="mt-3 mb-3"
          onClick={() => {
            this.setState({ showPicker: true });
          }}
        >
          Select week
        </Button>
        {selectedDays.length === 7 && (
          <div>
            {moment(selectedDays[0]).format('LL')} –{' '}
            {moment(selectedDays[6]).format('LL')}
          </div>
        )}
        <ModalWeekPicker
          show={showPicker}
          onHide={() => {
            this.setState({ showPicker: false });
          }}
          onWeekClick={this.handleWeekClick}
          onDaySelect={this.handleDaySelect}
          style={{width: "max-content"}}
        />
      </React.Fragment>
    );
  }
}
