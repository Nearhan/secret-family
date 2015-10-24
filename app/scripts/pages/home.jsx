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
    this.statusBars = this.statusBars.bind(this);
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
      case 6: return img + "familybeachday.gif";
      default: return img + "FAMILY-NORMAL.gif";
    }
  }

  modalText() {
    var mtext = [
      "You now have a second family that lives in New Jersey. This is going to be fun. There’s your beautiful wife Margaret. And there's your son, Junior, and your daughter, June.",
      "Junior has a clarinet recital this Wednesday.",
      "June made the lacross team.",
      "Judy got a new cat.",
      "Why do you travel so much for work?",
      "Beach! Fun! Yeah!"
    ];
    return mtext[this.state.month - 1];
  }

  modalButtons() {
    var mbuttons = [
      ["Cool", "Awesome"],
      ["Of course I'll be there.", "I'll try to make it."],
      ["Great job, kiddo!", "That's nice."],
      ["Okay.", "Who's Judy?"],
      ["I'm just really busy right now.", "What do you mean?"],
      ["Cowabunga!", "This is the best vacation ever."]
    ];
    return mbuttons[this.state.month - 1];
  }

  statusBars() {
    var bars = [
      ["100%", "100%", "100%"]
    ];

    if (this.state.month <= bars.length) {
      return bars[this.state.month - 1];
    }
    else {
      return ["100%", "100%", "100%"];
    }
  }

  affection() {
  }

  render() {

    return (
    <Grid style={{height: '620px'}}>

    <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Body style={{fontSize: "18px"}}>
        {this.modalText()}
      </Modal.Body>
      <Modal.Footer style={{fontSize: "22px"}}>
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
        <button disabled style={{width: '40%'}}>
          <span style={{fontSize: "20px", fontWeight: "bold", border: "0 solid #96A796"}}>
            Month {this.state.month}
          </span>
        </button>
        <button style={{width: '30%'}}
          onClick={this.incrementMonth}>
          <span style={{fontSize: "20px", fontWeight: "bold"}}>
            Next
          </span>
        </button>
      </div>
    </Row>

    <Row style={{height: '42%'}}>
      <h2>Happiness</h2>
      <div className="statusbar"
        style={{width: this.statusBars()[0]}}></div>
      <h2>Health</h2>
      <div className="statusbar"
        style={{width: this.statusBars()[1]}}></div>
      <h2>Money</h2>
      <div className="statusbar"
        style={{width: this.statusBars()[2]}}></div>
    </Row>

    <Row style={{height: '42%'}}>
    <img src={this.imgsrc()} style={{width: '100%'}}/>
    </Row>

    </Grid>
    );
  }
}

export default Home;
