import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import { Button } from 'react-bootstrap';
import { Link, Router } from 'react-router';

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
        <h3> Enter your Name: </h3>
        <input /> 
        <Button bsStyle="primary" bsSize="large" active onClick={this.click}> <Link to={`/signUp4`}> Continue </Link> </Button>
      </div>
    );
  }
}

export default Home;
