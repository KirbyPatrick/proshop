import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
            <Container>
                <Row>
                    <Col>
                        <p>&copy; {new Date().getFullYear()} ProShop. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;