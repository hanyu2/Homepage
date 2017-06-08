import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './includes/header.js';
import Body from './includes/body.js';
import Footer from './includes/footer.js';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
};

export default App;
