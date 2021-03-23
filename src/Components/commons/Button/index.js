import styled, { css } from 'styled-components';

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
  display: block;
  margin: 10px;
  opacity: 1;
  padding: 8px 32px;
  
    
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
