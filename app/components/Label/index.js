/**
*
* Label
*
*/

// import React from 'react';
import styled from 'styled-components';


const Label = styled.label`
  font-family: sans-serif;
  
  color: ${ props => (props.color) 
      ? props.color 
      : 'white'
    };
  font-size: ${ props => (props.fontSize)
      ? props.fontSize
      : '50px'
  };
  font-weight: ${ props => props.fontWeight
      ? props.fontWeight
      : 'initial'
    };
`;

Label.propTypes = {

};

export default Label;

