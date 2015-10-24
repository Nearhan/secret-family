import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import { Button } from 'react-bootstrap';
import { Link, Router } from 'react-router';

import {Grid, Row, Col, Modal} from 'react-bootstrap';

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
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

  click(e) {
  }

  render() {

    return (
      <div>
        <h1> Enter your Name: </h1>
        <input style={{fontSize: '32px'}} /> 
        <button style={{fontSize: '32px'}} onClick={this.click}> <Link to={`/signUp4`}> Continue </Link> </button>
      </div>
    );
  }
}

export default Home;
