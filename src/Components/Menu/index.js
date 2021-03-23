import React from 'react';
import { links } from './links';
import { MenuWrapper } from './MenuWrapper';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.Link>
        {links.map((link) => (
          <li key={link.url}>
            <a as="a" type="link" href={link.url}>{link.text}</a>
          </li>
        ))}
      </MenuWrapper.Link>
    </MenuWrapper>
  );
}
