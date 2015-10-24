import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import { Link, Router } from 'react-router';
import {Grid, Row, Col, Modal} from 'react-bootstrap';

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        one: false,
        name: ''
    };

    this.clickButton = this.clickButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  clickButton(event) {
      this.setState({one: true})
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    
      if (!this.state.one) {
          var x = (
                <div>
                <h1 style={{fontSize: '49px'}}> Hello <b> Dave </b> </h1>
                <h1 style={{fontSize: '49px'}}> Enter your Wife's Name: </h1>
                <input style={{fontSize: '49px'}} type="text" value={this.state.value} onChange={this.handleChange} /> 
                <button style={{fontSize: '49px'}} onClick={this.clickButton}> Enter </button>
            </div>)

      } else {

        console.log(this.state.name);

        x = (<Thing name={this.state.name} />)

      }

    return (x);
  }
}

class Thing extends React.Component {
    constructor(props){
        console.log(props);
        super(props);
    }
    render() {
        return (<div>
                    <h1 style={{fontSize: '49px'}}> Why do you keep calling me <b>{this.props.name}</b>?</h1>
                    <h1 style={{fontSize: '49px'}}> My name is <b> Margaret </b> </h1>
                    <button style={{fontSize: '49px', height: '20%'}} > <Link to={`/home`}> I'm so sorry </Link> </button>
                </div>
               )
    }
}
export default Home;
