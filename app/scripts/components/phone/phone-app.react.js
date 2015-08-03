import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import PhoneList from './list.react';
import Filter from '../filter/container.react';

class PhoneApp extends React.Component{
    constructor (props){
        super(props);
    }

    render(){
        return (
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
            );
    }
}

export default PhoneApp;