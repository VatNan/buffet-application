/**
*
* Background
*
*/

// import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${ props => (props.direction)
      ? props.direction
      : 'row'
    };
  background: ${ props => (props.bgColor)  
      ? props.bgColor
      : 'white'
    };
`;

Background.propTypes = {

};

export default Background;
