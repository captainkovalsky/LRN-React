import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import PhoneList from './components/phone/list.react';
import Filter from './components/filter/container.react';

// nvbnvbnvbn import gbjkdfglkdfg dgg use from const fgsdgfs fdsf; babelify doesn't throw error in it. IT'S FUCKING SHIT.

var mountNode = document.getElementById("content");

React.render(
	<Grid>
		<Row>
			<Col xs={6} md={4}>
				<Filter></Filter>
			</Col>
			<Col xs={12} md={8}>
				<PhoneList></PhoneList>
			</Col>
		</Row>
	</Grid>
	, mountNode);
