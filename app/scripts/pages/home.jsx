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
    this.imgsrc = this.imgsrc.bind(this);
    this.affection = this.affection.bind(this);
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

  imgsrc() {
    var img = "images/"
    switch (this.state.month) {
      default: return img + "FAMILY-NORMAL.gif";
    }
  }

  affection() {
  }

  render() {

    return (
    <Grid style={{height: '620px'}}>

    <Row style={{height: '4%'}}></Row>
    <Row style={{height: '16%'}}>
      <div className="btn-group-ability">
        <button disabled style={{width: '36%'}}>
          <span style={{fontSize: "20px", fontWeight: "bold"}}>
            Month {this.state.month}
          </span>
        </button>
        <button style={{width: '20%'}}
          onClick={this.incrementMonth}>
          <span style={{fontSize: "20px", fontWeight: "bold"}}>
            Next
          </span>
        </button>
      </div>
    </Row>

    <Row style={{height: '42%'}}>
      <h2>Happiness</h2>
      <div className="statusbar"></div>
      <h2>Health</h2>
      <div className="statusbar"></div>
      <h2>Money</h2>
      <div className="statusbar"></div>
    </Row>

    <Row style={{height: '42%'}}>
    <img src={this.imgsrc()} style={{width: '100%'}}/>
    </Row>

    </Grid>
    );
  }
}

export default Home;
