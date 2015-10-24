import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import MonthCounter from '../components/MonthCounter.jsx';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      month: 1
    };
    this.incrementMonth = this.incrementMonth.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  incrementMonth() {
    var m = this.state.month + 1;
    this.setState({
      month: m
    });
  }

  render() {

    return (
    <Grid style={{height: '620px'}}>

    <Row style={{height: '16%'}}>
      <div className="btn-group-ability">
        <button disabled style={{width: '30%'}}>
          <span style={{fontSize: "18px", fontWeight: "bold"}}>
            Month {this.state.month}
          </span>
        </button>
        <button style={{width: '20%'}}
          onClick={this.incrementMonth}>
          <span style={{fontSize: "18px", fontWeight: "bold"}}>
            Next
          </span>
        </button>
      </div>
    </Row>

    <Row style={{height: '42%'}}>
      Middle
    </Row>

    <Row style={{height: '42%'}}>
      Bottom
    </Row>

    </Grid>
    );
  }
}

export default Home;
