import React from 'react';
import { Button } from 'reactstrap';
import Card from '../../components/Card';

function ManageBlock(props) {
    return (
        <Card
            border="0px"
            direction="row"
            bgColor="azure"
            padding="6px 0px"
            alignItems="center"
            justifyContent="center"
            haveShadow={true}
        >
            <Button 
                color="primary"
                className="col-4 m-2" 
                size="lg"
            >
                สร้างบิล
            </Button>
            {' '}

            <Button 
                color="success"
                className="col-4 m-2" 
                size="lg"
            >
                เช็คบิล
            </Button>
        </Card>
    );
}

export default ManageBlock;