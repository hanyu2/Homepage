import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './includes/header.js';
import Body from './includes/body.js';
import Footer from './includes/footer.js';
import { withRouter } from 'react-router'

class Redirect extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    this.props.history.push('http://blog.han-yu.me');
  }
};

export default withRouter(Redirect);
