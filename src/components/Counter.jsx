import React from 'react';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

let Counter = () => {
    return (
        <>
            <Container className='mt-3' style={{opacity: '0.75'}}>
                <Row>
                    <h1 style={{color: 'white'}}>Authentic food on your table</h1>
                </Row>
                <Row>
                    <Col md={4}>
                        <p style={{color: 'white'}}>Various options to choose from the list of local restaurants:</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className='shadow-lg'>
                            <Card.Body>
                                <p className='display-6'>I am</p>
                                <Button variant='success' className='m-1'>Customer</Button> 
                                <Button variant='success' className='m-1'>Restaurateaur</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Counter;