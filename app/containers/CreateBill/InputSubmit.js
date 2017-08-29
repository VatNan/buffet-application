import React from 'react';
//components
import Card from '../../components/Card';
import Label from '../../components/Label';
import { Button } from 'reactstrap';

function InputSubmit(props) {
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
                ขั้นตอนที่ 3: กดบันทึก
            </Label>
            <Button 
                color="primary"  
                size="lg"
                block
            >
                บันทึก
            </Button>

        </Card>
    );
}

export default InputSubmit;