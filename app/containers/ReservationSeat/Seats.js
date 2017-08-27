import React from 'react';
//components
import { Button } from 'reactstrap';

function Seats(props) {
    props.seats.map((seat, index) => (
        <Button key={index} className={seat.class} size={seat.size}>
            { seat.title }
        </Button>
    ));
}

export default Seats;