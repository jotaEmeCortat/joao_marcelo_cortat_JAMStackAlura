import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../utils/propToStyle';
import { TextTypes } from '../Text';

const buttonGhost = css`
background: transparent;
border: 2px solid #FED231;
color:  #FED231;
`;

const buttonDefault = css`
  background: #FED231;
  border: none;
  color: ${({ theme }) => theme.colors.contrastText};
`;

const ButtonWrapper = styled.button`
  border: none;
  border-radius:7px;
  cursor: pointer;
  opacity: 1;
  padding: 16px 32px;
  ${TextTypes.link}

  :hover{
    background-color: #ffc31f;
  }

  ${propToStyle('marginTop')}
  ${propToStyle('margin')}
  ${propToStyle('display')}

  ${({ ghost }) => {
    if (ghost) {
      return buttonGhost;
    }
    return buttonDefault;
  }}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
`;

export default function Button({ children, ...props }) {
  return (
    <ButtonWrapper {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
