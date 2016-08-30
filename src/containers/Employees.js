import React, { Component } from 'react';
import EmployeeList from '../components/employees/ListComponent';

class Employees extends Component {

  constructor(props){
    super(props);

    this.state = {
      employees: []
    };
  }

  componentWillMount() {
    let self = this;
    console.log(`${API_URI}/employee`);
    fetch(`${API_URI}/employee`)
      .then(r => r.json())
      .then(payload => {
        self.setState({
          employees: payload
        });
      });
  }

  render() {
    const { employees } = this.state;

    return <EmployeeList data={employees} />;
  }
}

export default Employees;
