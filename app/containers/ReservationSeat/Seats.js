import React from 'react';
//components
import { Button } from 'reactstrap';

const CLASS_BY_GROUP = {
    A: "col-4 col-sm-3 m-1",
    B: "col-4 m-2"
};

function Seats(props) {
    return props.seats.map((seat, index) => (
        <Button 
            key={index} 
            className={CLASS_BY_GROUP[props.group] || ""} 
            size="lg"
        >
            { seat.group + seat.index }
        </Button>
    ));
}

export default Seats;