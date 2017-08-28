import React from 'react';
//components
import { Button } from 'reactstrap';

const CLASS_BY_GROUP = {
    A: "col-4 col-sm-3 m-1",
    B: "col-4 m-2"
};

const TEXT_BY_SEAT = {
    free: 'ว่าง',
    busy: 'ไม่ว่าง',
    reserve: 'จอง'
}

function Seats(props) {
    return props.seats.map((seat, index) => (
        <Button 
            key={index} 
            className={CLASS_BY_GROUP[props.zone] || ""} 
            size="lg"
        >
            { seat.zone + seat.index }
            <p 
                style={{ margin: '0px' }}
            >
                {TEXT_BY_SEAT[seat.status] || ""}}
            </p>
        </Button>
    ));
}

export default Seats;