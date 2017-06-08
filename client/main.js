import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const routes = (
  <Router>
    <Switch>
       <Route exact path="/" component={App}/>
    </Switch>
  </Router>
);


Meteor.startup(() => {
  $.getScript('js/back-to-top.js');
  $.getScript('js/boostrap.min.js');
  $.getScript('js/imagesloaded.pkgd.min.js');
  $.getScript('js/isotope.pkgd.min.js');
  $.getScript('js/jquery-1.12.4.min.js');
  $.getScript('js/easypiechart.min.js');
  $.getScript('js/jquery.scrollTo.min.js');
  $.getScript('js/style-switcher.js');


  ReactDOM.render(routes, document.querySelector(".render-target"));
});
