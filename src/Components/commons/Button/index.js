import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../utils/propToStyle';
import { TextTypes } from '../Text';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

const buttonGhost = css`
background: transparent;
border: 2px solid ${({ theme }) => theme.colors.backgroundSecondary};
color:  ${({ theme }) => theme.colors.backgroundSecondary};
:hover{
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.contrastText};
  }
`;

const buttonDefault = css`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: none;
  color: ${({ theme }) => theme.colors.contrastText};
  :hover{
    background-color: #ffc31f;
  }
`;

const ButtonWrapper = styled.button`
  border: none;
  border-radius:7px;
  cursor: pointer;
  opacity: 1;
  padding: 16px 32px;
  margin: auto;
  ${TextTypes.link}
  ${breakpointsMedia({
    md: css`
      `,
    lg: css`
         margin-left: initial;
      `,
  })}

  

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
