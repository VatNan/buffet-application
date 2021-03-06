import React from 'react';
//components
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';
import Card from '../../components/Card';
import Label from '../../components/Label';

function InputCustomAmount(props) {
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
               { "ขั้นตอนที่ 1: ระบุจำนวนลูกค้า  ( คงเหลือ " + props.total  + " ที่ )"}
            </Label>
            <InputGroup className="col-12 p-2">
                <InputGroupAddon>   
                    จำนวนลูกค้า
                </InputGroupAddon>
                <Input 
                    type="number" 
                    min={0} 
                    step={1} 
                    placeholder="กรุณาระบุจำนวนลูกค้า"
                    value={props.customerAmount} 
                    onChange={(e) => {
                        let value = e.target.value + "";
                        //validate value is ""
                        if (value === "") value = "0";
                        value = Number(value);

                        props.checkCustomerAmount(value);
                    }}
                />
            </InputGroup>
        </Card>
    );
}

export default InputCustomAmount;