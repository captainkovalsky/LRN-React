import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import PhoneApp from './components/phone/phone-app.react';
// let phoneApp = new PhoneApp;

class App extends React.Component{
	constructor (props){
		super(props);
	}

	render(){
		return (
		      <div>
		        <header>
		          <ul>
		            // <li><Link to="app">Dashboard</Link></li>
		            // <li><Link to="inbox">Inbox</Link></li>
		            // <li><Link to="calendar">Calendar</Link></li>
		          </ul>
		          Logged in as Jane
		        </header>

		        {/* this is the important part */}
		        <RouteHandler/>
		      </div>
		    );
	}
}

var routes = (
  <Route name="app" path="/" handler={App}>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});