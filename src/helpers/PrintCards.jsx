import React from 'react';
import { Card } from 'react-bootstrap';

const PrintCards = ({ id, name, image }) => {
    return (
        <div>
            <Card style={{ width: '18rem', textAlign: "center" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PrintCards;