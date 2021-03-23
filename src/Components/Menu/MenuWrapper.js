import styled, { css } from 'styled-components';
/* import { breakpointsMedia } from '../../../Theme/utils/breakpointsMedia'; */

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 48px;

  /* ${breakpointsMedia({
    md: css`
      margin-top: 64px;
      padding: 0 64px;
      
    `,
    lg: css`
      justify-content: flex-end;
      margin-left: auto;
      margin-right: auto;
      width: 100%;  
    `,
    xl: css`
    `,
  })} */
`;

MenuWrapper.Link = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around; 
  /* ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-around;
     
    `,
  })} */
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    transition: 200ms ease-in-out;
    
    &:hover,
    &:focus {
      color: #070C0E;
      
    }
    &::last-child{
padding-right:0px;
  }
  }
`;
