import styled, { css } from 'styled-components';
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
  color: #111111;
`;

export const Button = styled.button`
  border: none;
  border-radius:7px;
  cursor: pointer;
  opacity: 1;
  padding: 16px 32px;
  ${TextTypes.link}

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
