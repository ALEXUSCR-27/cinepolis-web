import React, {Component} from 'react';
import { Container, Col} from 'react-bootstrap';

class Row extends  Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <Container>
                <Row>
                  <Col>1 of 1</Col>
                </Row>
            </Container>
        );
    }
}
export default Row;