import React from 'react';
import { links } from '../commons/Link/links';
import { MenuWrapper } from './MenuWrapper';
import { Link } from '../commons/Link';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.Link>
        {links.map((link) => (
          <li key={link.url}>
            <Link color="primary" href={link.url}>{link.text}</Link>
            {/* <NextLink href={link.url}>
              <Text type="link">
                {link.text}
              </Text>
            </NextLink> */}
          </li>
        ))}
      </MenuWrapper.Link>
    </MenuWrapper>
  );
}
