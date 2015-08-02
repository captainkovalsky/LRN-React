import React from 'react';
import Router from 'react-router';

import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { NavItem, Nav } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap';

import PhoneApp from './components/phone/phone-app.react';

class App extends React.Component{
	constructor (props){
		super(props);
	}

	render(){
		return (
			<div>
		        <div class="container">
		            <div class="header">
						<Nav bsStyle='pills'>
							<NavItemLink to="app">Home</NavItemLink>
							<NavItemLink to="phoneApp">Phone App</NavItemLink>
						</Nav>
		                <h3 class="text-muted">LRN React</h3>
		            </div>
		            <div id="content" class="row marketing"></div>
        		</div>

	            <div class="footer">
	                <p>♥ from the Yeoman team</p>
	            </div>
		        <RouteHandler/>
	        </div>	
		    );
	}
}

let routes = (
  <Route name="app" path="/" handler={App}>
  	<Route name="phoneApp" path="/phones" handler={PhoneApp}/>
  </Route>
);

Router.run(routes, function (Handler) {
   React.render(<Handler/>, document.body)
});