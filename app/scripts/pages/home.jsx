import React from 'react';
import {Grid, Row, Col, Modal} from 'react-bootstrap';
import MonthCounter from '../components/MonthCounter.jsx';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: true,
      month: 1
    };
    this.incrementMonth = this.incrementMonth.bind(this);
    this.imgsrc = this.imgsrc.bind(this);
    this.affection = this.affection.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.modalText = this.modalText.bind(this);
    this.modalButtons = this.modalButtons.bind(this);
  }

  close() {
    this.setState({showModal: false});
  }
  open() {
    this.setState({showModal: true});
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
      month: m,
      showModal: true
    });
  }

  imgsrc() {
    var img = "images/"
    switch (this.state.month) {
      default: return img + "FAMILY-NORMAL.gif";
    }
  }

  modalText() {
    var mtext = [
      "You now have a second family that lives in New Jersey. This is going to be fun. There’s your beautiful wife Margaret. Your son, Junior. Your daughter, June"
    ];
    return mtext[this.state.month - 1];
  }

  modalButtons() {
    var mbuttons = [
      ["Cool", "Awesome"]
    ];
    return mbuttons[this.state.month - 1];
  }

  affection() {
  }

  render() {

    return (
    <Grid style={{height: '620px'}}>

    <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Body style={{fontSize: "14px"}}>
        {this.modalText()}
      </Modal.Body>
      <Modal.Footer style={{fontSize: "16px"}}>
        <button onClick={this.close}>
          {this.modalButtons()[0]}
        </button>
        <button onClick={this.close}>
          {this.modalButtons()[1]}
        </button>
      </Modal.Footer>
    </Modal>

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
