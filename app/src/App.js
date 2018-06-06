import React, { Component } from 'react';
import Event from './components/Event';
// import axios from 'axios';

import data from './data';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: []
  //   }
  // }
  componentDidMount() {
      // axios.get('http://www.mocky.io/v2/5afe0a323200006800f1ae5a')
      // .then( (res) => {
      //   let data = JSON.stringify(res.data);
      //   console.log(data);
      //     this.setState(() => ({ data }))
      // })
      // .catch( (err) => {
      //     console.log(err);
      // });
  }
  render() {
    return (
      <Event data={data} />
    );
  }
}

export default App;
