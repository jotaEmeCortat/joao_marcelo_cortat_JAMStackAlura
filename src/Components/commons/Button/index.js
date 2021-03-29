import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../utils/propToStyle';
import { TextTypes } from '../Text';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const ButtonVariants = {

  default: css`
    background: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.contrastText.primary};
    border:none;
    :hover{
      background-color: #ffc31f;
    }
  `,

  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.contrastText.primary};
    :hover{
      background: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.contrastText.secondary};
      }
  `,

  back: css`
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.contrastText.secondary};
    :hover{
    background: transparent;
    color: ${({ theme }) => theme.colors.contrastText.primary};
    }
  `,
};

const ButtonWrapper = styled.button`
  ${({ variant }) => ButtonVariants[variant]};
  border-radius:7px;
  border:2px solid ${({ theme }) => theme.colors.background.primary};
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

  ${propToStyle('display')}
  ${propToStyle('margin')}
  ${propToStyle('padding')}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
`;

export default function Button({ children, variant, ...props }) {
  return (
    <ButtonWrapper
      variant={variant}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.node.isRequired,
};
