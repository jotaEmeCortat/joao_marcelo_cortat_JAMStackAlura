import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';
import { propToStyle } from '../../../utils/propToStyle';

export const TextTypes = {
  title: css`
    font-weight: ${({ theme }) => theme.typography.title.fontWeight};
    line-height: ${({ theme }) => theme.typography.title.lineHeight};
    font-size: ${({ theme }) => theme.typography.title.fontSize.sm};
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.title.fontSize.md};
        `}
      `,
    lg: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.title.fontSize.lg};
        `}
      `,
  })}
  `,

  subTitle: css`
    font-weight: ${({ theme }) => theme.typography.subTitle.fontWeight};
    line-height: ${({ theme }) => theme.typography.subTitle.lineHeight};
    font-size: ${({ theme }) => theme.typography.subTitle.fontSize.sm};
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.subTitle.fontSize.md};
        `}
      `,
    lg: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.subTitle.fontSize.lg};
        `}
      `,
  })}
  `,

  paragraphy: css`
    font-weight: ${({ theme }) => theme.typography.paragraphy.fontWeight};
    line-height: ${({ theme }) => theme.typography.paragraphy.lineHeight};
    font-size: ${({ theme }) => theme.typography.paragraphy.fontSize.sm};
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.paragraphy.fontSize.md};
        `}
      `,
    lg: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.paragraphy.fontSize.lg};
        `}
      `,
  })}
  `,

  button: css`
  font-weight: ${({ theme }) => theme.typography.link.fontWeight};
  line-height: ${({ theme }) => theme.typography.link.lineHeight};
  font-size: ${({ theme }) => theme.typography.link.fontSize};
  `,
};

const TextBase = styled.span`
  ${({ type }) => TextTypes[type]};
  color: ${({ theme, color }) => get(theme, `colors.text.${color}`)};

  ${propToStyle('textAlign')};
  ${propToStyle('margin')}
`;

export default function Text({
  tag, type, color, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      type={type}
      color={color}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  type: 'paragraphy',
  color: 'primary',
  children: null,
};
