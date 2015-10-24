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
      case 2: return img + "music-concert.gif";
      case 3: return img + "play-catch.gif";
      case 6: return img + "TV-TIME.gif";
      case 7: return img + "familybeachday.gif";
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
      "What do you want to watch tonight?",
      "Beach! Fun! Yeah!"
    ];
    return mtext[this.state.month - 1];
  }

  modalButtons() {
    var mbuttons = [
      ["Cool", "Awesome"],
      ["Of course I'll be there.", "I'll try to make it."],
      ["Look at the arm on this kid.", "Great job, sport!"],
      ["Okay.", "Who's Barbara?"],
      ["I'm just really busy right now.", "What do you mean?"],
      ["Local news", "Emeril"],
      ["Cowabunga!", "This is the best vacation ever."]
    ];
    return mbuttons[this.state.month - 1];
  }

  statusBars() {
    var bars = [
      ["80%", "86%", "52%"],
      ["72%", "67%", "64%"],
      ["65%", "43%", "84%"],
      ["100%", "83%", "67%"],
      ["64%", "90%", "72%"],
      ["100%", "85%", "64%"]
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
    <Grid style={{height: '580px'}}>

    <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Body style={{fontSize: "18px"}}>
        <span style={{fontSize: "22px"}}>
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
        <button style={{width: '30%'}}>
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
