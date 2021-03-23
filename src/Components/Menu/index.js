import React from 'react';
import Text from '../commons/Text';
import { links } from './links';
import { MenuWrapper } from './MenuWrapper';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.Link>
        {links.map((link) => (
          <li key={link.url}>
            <Text as="a" type="link" href={link.url}>{link.text}</Text>
          </li>
        ))}
      </MenuWrapper.Link>
    </MenuWrapper>
  );
}
