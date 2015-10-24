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
        <Grid style={{height: '620px'}}>
            <h1 style={{fontSize: '49px'}}> I want a secret ...</h1>
            <button style={{fontSize: '49px', height: '20%' }} onClick={this.click}> <Link to={`/signUp3`}> Wife </Link> </button>
            <button style={{fontSize: '49px', height: '20%' }} onClick={this.click}> <Link to={`/signUp3`}> Husband </Link> </button>
        </Grid>
    );
  }
}

export default Home;
