import React from 'react';
//constancs
import {
    CLASS_BY_ZONE_SEAT,
    TEXT_BY_STATUS_SEAT,
    BUTTON_COLOR_BY_STATUS_SEAT
} from '../../config/constances';
//components
import { Button } from 'reactstrap';


function Seats(props) {
    if (props.seats.length === 0) return;

    return props.seats.map((seat, index) => (
        <Button 
            key={index} 
            className={CLASS_BY_ZONE_SEAT[seat.zone] || ""} 
            color={BUTTON_COLOR_BY_STATUS_SEAT[seat.status] || "secondary"}
            size="lg"
        >
            { seat.zone + seat.no }
            <p 
                style={{ margin: '0px' }}
            >
                {TEXT_BY_STATUS_SEAT[seat.status] || ""}
            </p>
        </Button>
    ));
    
}

export default Seats;