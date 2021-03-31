import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const StyledLink = styled.a`
  font-weight: ${({ theme }) => theme.typography.link.fontWeight};
  line-height: ${({ theme }) => theme.typography.link.lineHeight};
  font-size: ${({ theme }) => theme.typography.link.fontSize};
  color: ${({ theme, color }) => get(theme, `colors.text.${color}`)};
  text-decoration: none;
`;

export const Link = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    <StyledLink {...props}>
      {children}
    </StyledLink>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
