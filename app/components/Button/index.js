/**
*
* Button
*
*/

import styled from 'styled-components';

 const Button = styled.button`
    background: ${props => (props.bgColor)
        ? props.bgColor
        : 'black'
    };
    color: ${props => (props.fontColor)
        ? props.fontColor
        : 'white'
    };
    font-size: 1.2em;
    font-family: serif;
    padding: 2px;
    border: 2px solid ${props => (props.bg)
        ? props.bg
        : 'black'
    };
    border-radius: 7px;
    width:  ${props => (props.width)
        ? props.width
        : '80%'}; 
    height: 5rem;
    margin: 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    ${ props => (props.nonButton) && `
        outline: 0 !important;
        border: none !important;
        padding: 1px 20px !important;
        font-size: 1.6em !important;
        height: 4.8rem !important;
        box-shadow: 0 0 0 0 rgba(0,0,0,0.2) !important;

        ${Button}:hover & {
            cursor: default !important;
        };
    `}

`;

export default Button;
