/**
*
* Card
*
*/

// import React from 'react';
import styled from 'styled-components';
// import messages from './messages';

const Card = styled.div`
  display: flex;
  flex: ${ props => (props.flex) 
      ? props.flex
      : '0'
    };
  flex-direction: ${ props => (props.direction)
      ? props.direction
      : 'row'
    };
  justify-content: ${ props => (props.justifyContent) 
      ? props.justifyContent
      : 'flex-start'
    };
  align-items: ${ props => (props.alignItems) 
      ? props.alignItems
      : 'flex-start'
    };
  align-self: ${ props => (props.alignSelf) 
      ? props.alignSelf
      : 'stretch'
    };

  height: ${ props => props.height
      ? props.height
      : 'auto'
    };
  width: ${props => (props.width)
      ? props.width
      : 'auto'
    };
  background-color: ${ props => (props.bgColor)
      ? props.bgColor
      : 'inherit'
    };
  padding: ${ props => (props.padding) 
      ? props.padding
      : '10px'
    };
  margin: ${ props => (props.margin)
      ? props.margin
      : '0px'
    };
  border: ${ props => (props.border)
      ? props.border
      : '2px solid black'
    };
  border-radius: ${ props => (props.borderRadius)
      ? props.borderRadius
      : '5px'
    };
 
  ${ props => props.haveShadow && `
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  `}
`;


export default Card;

