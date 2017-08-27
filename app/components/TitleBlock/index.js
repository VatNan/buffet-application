/**
*
* TitleBlock
*
*/

import React from 'react';
// import styled from 'styled-components';
//components
import Label from '../Label';
import Card from '../Card';


function TitleBlock(props) {
  return (
    <Card
      border="0px"
      direction="column"
      bgColor="#1c51a2"
      padding="6px 0px"
      alignItems="center"
      haveShadow={true}
    >
      <Label
        fontSize="30px"
      >
        { props.title }
      </Label>
    </Card>
  );
}

TitleBlock.propTypes = {

};

export default TitleBlock;
