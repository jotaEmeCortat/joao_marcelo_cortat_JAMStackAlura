import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../utils/breakpointsMedia';
import Button from '../commons/Button';
import Link from '../commons/Link';
import { links } from '../commons/Link/links';

export const MenuMobileWrapper = styled.nav`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

MenuMobileWrapper.LinksSide = styled.div`
  list-style: none;

  ${breakpointsMedia({
    lg: css``,
  })}

  a {
    text-align: center;
    display: block;
    margin-bottom: 32px;
    text-decoration: none;
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
      color: #ffc31f;
    }
  }
`;

export default function MenuMobile() {
  const [modal, setModal] = React.useState(false);

  return (
    <MenuMobileWrapper>
      <MenuMobileWrapper.LinksSide>
        {links.map((link) => (
          <li key={link.url}>
            <Link color="secondary" href={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
        <Button
          variant="default"
          padding="8px 16px"
          onClick={() => setModal(!modal)}
        >
          contact
        </Button>
      </MenuMobileWrapper.LinksSide>
    </MenuMobileWrapper>
  );
}
