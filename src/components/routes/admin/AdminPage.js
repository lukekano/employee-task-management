import React, { Component } from "react";
import { Table } from "react-bootstrap";
import WeekPicker from "../../week-picker/WeekPicker";

export default class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: []
    }
  }

  componentDidMount() {
    this.setState({data: this.populateDummy()});
  }

  populateDummy = () => {
    return [
      { employeeId: 1,
        name: "John Doe",
        projectName: "Batch Opt Out for Gadget Shield",
        phase: "Design, Code, Unit Testing",
        effort: 3.0
      },
      { employeeId: 2,
        name: "Jane Doe",
        projectName: "Batch Gadget Shield",
        phase: "Design, Code, Unit Testing",
        effort: 1.0
      },
      { employeeId: 3,
        name: "John Doe",
        projectName: "Batch Opt Out for Gadget Shield",
        phase: "Design, Code, Unit Testing",
        effort: 3.0
      },
      { employeeId: 4,
        name: "John Doe",
        projectName: "Batch Opt Out for Gadget Shield",
        phase: "Design, Code, Unit Testing",
        effort: 3.0
      },
      { employeeId: 5,
        name: "John Doe",
        projectName: "Batch Opt Out for Gadget Shield",
        phase: "Design, Code, Unit Testing",
        effort: 3.0
      }
    ]
  }
  
  render() {
    const {data} = this.state;
    return (
      <React.Fragment>
          <WeekPicker/>
        <Table striped bordered hover size="sm" className="mt-3">
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Project</th>
              <th>Phase</th>
              <th>Effort</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.employeeId}>
              <td>{item.employeeId}</td>
              <td>{item.name}</td>
              <td>{item.projectName}</td>
              <td>{item.phase}</td>
              <td>{item.effort}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}
