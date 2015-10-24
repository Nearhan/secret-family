import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import { Link, Router } from 'react-router';


var wtf = false;

console.log(wtf);

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        one: false,
        two: false
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

  clickButton(event) {
      wtf = true;
      console.log(wtf);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    
      if (!wtf) {
          var x = (<div>
            <h3> Enter your Wifes Name: </h3>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> 
            <button onClick={this.clickButton}> Enter </button>
            </div>)

      } else {

        x = (<Thing name={this.state.value} />)

      }

    return (x);
  }
}

class Thing extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
                <div>
                    <h3> Why do you keep calling me <b> {this.props.name} </b> </h3>
                    <h3> My name is Margaret </h3>
                </div>
               )
    }
}
export default Home;
