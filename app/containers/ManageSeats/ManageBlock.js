import React from 'react';
//components
import { Button, ButtonGroup } from 'reactstrap';
import Card from '../../components/Card';
import Block from '../../components/Block';
import Label from '../../components/Label';

function ManageBlock(props) {
    return (
        <Card
            border="0px"
            direction="column"
            bgColor="azure"
            padding="6px 0px"
            alignItems="center"
            haveShadow={true}
        >
            <Block
                flex="1"
                justifyContent="center"
            >
                <Button 
                    color="primary"
                    className="col-5 m-1" 
                    size="lg"
                    onClick={props.goToCreateBill}
                >
                    สร้างบิล
                </Button>
                {' '}

                <Button 
                    color="success"
                    className="col-5 m-1" 
                    size="lg"
                    onClick={props.goToCheckBill}
                >
                    เช็คบิล
                </Button>
            </Block>

            <Block
                direction="column"
                padding="10px"
            >
                <Label
                    color="black"
                    fontSize="20px"
                >
                    ที่นั่งทั้งหมด : {props.max} ที่
                </Label>
                <Label
                    color="black"
                    fontSize="20px"
                >
                    ที่นั่งที่ว่างอยู่ : {props.total} ที่
                </Label> 
            </Block>
        </Card>
    );
}

export default ManageBlock;