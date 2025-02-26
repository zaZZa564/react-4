import React from "react";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: 'Header',
      userData: ''
    }

    this.clickLog = this.clickLog.bind(this);
  }

  render() {
    return(
      <div>
        <h1>{this.state.headerText}</h1>
        <h2>{this.state.userData}</h2>
        <input placeholder='Type here'
          onClick={this.clickLog}
          onChange={event => {this.setState({userData: event.target.value})}}
          onMouseOver={this.overLog}
        ></input>
      </div>
    );
  }

  clickLog() {
    this.setState({headerText: 'changed'});
    console.log('clicked');
  }
  overLog() {
    console.log('mouse over');
  }
}

export default InputField;