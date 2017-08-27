import React from 'react';
//components
import { ButtonGroup } from 'reactstrap';
import Seats from './Seats';
import Block from '../../components/Block';
import Label from '../../components/Label';


function GroupSeat(props) {
    return (
        <Block
            flex="1"
            bgColor="#cee6fb"
            padding="6px"
            direction="column"
            margin="25px 0px"
        >
            <Label
                fontSize="20px"
                color="black"
            >

                {props.title}
            </Label>
            <Label
                fontSize="20px"
                color="black"
            >
                {props.description}
            </Label>
            <Block style={{ display: 'flex', width: '100%' }}>
                <ButtonGroup className="row justify-content-center" style={{ flex: 1 }}>
                    <Seats seats={props.seats}/>
                </ButtonGroup>
            </Block>
        </Block>
    );
}

export default GroupSeat;