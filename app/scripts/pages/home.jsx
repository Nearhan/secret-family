﻿import React from 'react';
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
    if (this.state.month !== 9) {
      this.setState({showModal: true});
    }
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
      case 2: return img + "music-concert.gif";
      case 3: return img + "play-catch.gif";
      case 6: return img + "familybeachday.gif";
      case 7: return img + "TV-TIME.gif";
      case 8: return img + "macaroni.gif";
      case 9: return img + "dinner.gif";
      case 10: return img + "MARG-SOLO.gif";
      default: return img + "FAMILY-NORMAL.gif";
    }
  }

  modalText() {
    var mtext = [
      "You now have a second family that lives in New Jersey. This is going to be fun. There’s your beautiful wife Margaret. And there's your son, Junior, and your daughter, June.",
      "June has a clarinet recital this Wednesday.",
      "Junior wants to play catch.",
      "Barbara got a new cat.",
      "Why do you travel so much for work?",
      "Beach! Fun! Yeah!",
      "What do you want to watch tonight?",
      "Junior misses you. He made this for you.",
      "Where do you think you're going? I just made dinner."
    ];
    return mtext[this.state.month - 1];
  }

  modalButtons() {
    var mbuttons = [
      ["Cool", "Awesome"],
      ["Of course I'll be there.", "I'll try to make it."],
      ["Easy there, Stephen Strasburg!", "Easy there, New Jersey's own Derek Jeter!"],
      ["Okay.", "Who's Barbara?"],
      ["It's the busy season.", "What do you mean?"],
      ["Cowabunga!", "This is the best vacation ever."],
      ["Local news", "Emeril"],
      ["Hide it in my car", "Hide it in my car"],
      ["I'm not that hungry.", "I don't feel well."]
    ];
    return mbuttons[this.state.month - 1];
  }

  statusBars() {
    var bars = [
      ["80%", "86%", "52%"],
      ["72%", "67%", "64%"],
      ["80%", "86%", "52%"],
      ["100%", "83%", "67%"],
      ["65%", "73%", "84%"],
      ["64%", "90%", "72%"],
      ["100%", "85%", "64%"],
      ["20%", "50%", "20%"],
      ["4%", "40%", "56%"]
    ];

    if (this.state.month <= bars.length) {
      return bars[this.state.month - 1];
    }
    else {
      return ["73%", "45%", "70%"];
    }
  }

  affection() {
  }

  render() {

    return (
    <Grid style={{height: '580px'}}>

    <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Body style={{fontSize: "18px"}}>
        <span style={{fontSize: "22px", color: "#96A796"}}>
        {this.modalText()}
        </span>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={this.close} style={{fontSize: "20px"}}>
          {this.modalButtons()[0]}
        </button>
        <button onClick={this.close} style={{fontSize: "20px"}}>
          {this.modalButtons()[1]}
        </button>
      </Modal.Footer>
    </Modal>

    <Row style={{height: '4%'}}></Row>
    <Row style={{height: '12%'}}>
      <div className="btn-group-ability">
        <button style={{width: '60%'}}
          onClick={this.incrementMonth}>
          <span style={{fontSize: "20px", fontWeight: "bold"}}>
            Spend Time
          </span>
        </button>
        <button style={{width: '30%'}}
          onClick={this.incrementMonth}>
          <span style={{fontSize: "20px", fontWeight: "bold"}}>
            Quit
          </span>
        </button>
      </div>
    </Row>

    <Row style={{height: '36%'}}>
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
