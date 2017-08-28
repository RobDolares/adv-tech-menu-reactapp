import React, { Component } from 'react';
import '../styles/App.css';
// Import BaseLayout, Appetizers, Entrees, Desserts

import BaseLayout from './Layout';
import Appetizers from './Appetizers';
import Entrees from './Entrees';
import Desserts from './Desserts';

class App extends Component {
  constructor(props){
    super(props)

    // Set initial state for appetizers, entrees, and desserts.
    // All should be set to empty arrays.
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
  }

// Lifecycle method
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entrees, and desserts.
// Set these to state.
// YOUR CODE HERE>

componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then(results => results.json())
    .then(responseData => {
      let menu= responseData[0]
      this.setState({
        appetizers: menu.Appetizers,
        entrees: menu.Entrees,
        desserts: menu.desserts
      });
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });

  }

  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div>
        <BaseLayout>
          <div className="menu col-md-10 col-md-offset-1">
            <h2 className="col-md-offset-2">Menu</h2>

            <Appetizers appetizers= {this.state.appetizers}/>
            <hr className="col-sm-8 col-sm-offset-2" />
            <Entrees entrees = {this.state.entrees} />
            <hr className="col-sm-8 col-sm-offset-2" />
            <Desserts desserts = {this.state.entrees}/>
          </div>

        </BaseLayout>
      </div>


    );
  }
}

export default App;
