import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../utils/breakpointsMedia';

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 32px;
  padding: 0px 16px;
  ${breakpointsMedia({
    md: css`
      margin-top: 48px;
      padding: 0 48px;
    `,
    lg: css``,
    xl: css``,
  })}
`;

MenuWrapper.ButtonBackSide = styled.div`
  padding: 0;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-right: auto;
`;

MenuWrapper.LinksSide = styled.div`
  display: none;

  ${breakpointsMedia({
    lg: css`
      align-items: center;
      width: 50%;
      justify-content: space-between;
      list-style: none;
      display: flex;
    `,
  })}

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
      color: #ffc31f;
    }
  }
`;

MenuWrapper.ButtonMenuSide = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
    lg: css`
      display: none;
    `,
  })}
`;
