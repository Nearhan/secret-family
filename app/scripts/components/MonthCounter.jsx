import React from 'react';
import $ from 'jquery';

class MonthCounter extends React.Component {

  constructor() {
    super();
    this.incMonth = this.incMonth.bind(this);
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  incMonth(month) {
    this.props.increment_month(month);
  }

  render() {
    return (
      <div className="btn-group-ability">
        <button disabled style={{width: '30%'}}>
          <span style={{fontSize: "18px", fontWeight: "bold"}}>
            Month {this.props.month}
          </span>
        </button>
        <button style={{width: '20%'}}
          onClick={this.incMonth.bind(this, this.props.month + 1)}>
          <span style={{fontSize: "18px", fontWeight: "bold"}}>
            Next
          </span>
        </button>
      </div>
      );
  }
}

export default MonthCounter;

