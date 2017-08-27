/**
*
* Block
*
*/

// import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  width:  ${ props => (props.width)
      ? props.width
      : 'auto'
    };
  height:  ${ props => (props.height)
      ? props.height
      : 'auto'
    };
  flex: ${ props => (props.flex)
      ? props.flex
      : '0 1 auto' 
    };
  flex-direction: ${ props => (props.direction)
      ? props.direction
      : 'row'
    };
  background-color: ${ props => (props.bgColor)
      ? props.bgColor
      : 'inherit'
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
  padding: ${ props => (props.padding) 
      ? props.padding
      : '0'
    };
  margin: ${ props => (props.margin) 
      ? props.margin
      : '0'
    };
`;

Block.propTypes = {

};

export default Block;
