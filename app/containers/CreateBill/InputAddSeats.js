import React from 'react';
//coponents
import Card from '../../components/Card';
import Label from '../../components/Label';
import Select from 'react-select';
//css of react-select 
import 'react-select/dist/react-select.css';

var options = [
    // { value: 'one', label: 'One' },
    // { value: 'two', label: 'Two' }
  ];


function InputAddSeats(props) {
    return (
        <Card
            border="0px"
            direction="column"
            bgColor="azure"
            margin="5px 0px"
            padding="20px 0px"
            alignItems="center"
        >
            <Label
                fontSize="20px"
                color="black"
            >
                ขั้นตอนที่ 2: ระบุที่นั่ง
            </Label>
            <Select
                className="col-12 p-2"
                name="form-field-name"
                value={props.seatsIsSelect}
                multi
                simpleValue
                options={props.seats}
                onChange={(value) => { 
                    //console.log("testtest => " + value);
                    props.chooseSeats(value);
                }}
            />
        </Card>
    );
}

export default InputAddSeats;