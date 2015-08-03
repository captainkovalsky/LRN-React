import React from 'react';
import Router from 'react-router';

import { DefaultRoute, Link, Route, RouteHandler, Redirect } from 'react-router';
import { Grid, NavItem, Nav } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap';

import PhoneApp from './components/phone/phone-app.react';
class PhoneItem extends React.Component{
	constructor (props){
		super(props);
	}

	render(){
		return (<div>ITEM</div>);
	}
}
class App extends React.Component{
	constructor (props){
		super(props);
	}

	render(){
		return (
			<div>
                <Nav bsStyle="pills">
					<NavItemLink className="pull-right" to="phoneApp">Phone App</NavItemLink>
				</Nav>
                <Grid fluid={true}>
    		        <RouteHandler />
                </Grid>
	        </div>	
		    );
	}
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <Redirect from="/" to="phoneApp" />
  	<Route name="phoneApp" path="/phones" handler={PhoneApp} />
  	<Route name="phoneItem" path="/phone/:phoneId" handler={PhoneItem} />
  </Route>
);

Router.run(routes, function (Handler) {
   React.render(<Handler/>, document.body)
});