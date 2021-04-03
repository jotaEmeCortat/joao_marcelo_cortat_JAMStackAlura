import React from 'react';
import styled from 'styled-components';
import Text from '../commons/Text';

const FooterWrapper = styled.footer`
  margin-top: 8px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 28px;
  padding-left: 28px;
  img {
    width: 32px;
    margin-right: 23px;
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <Text type="paragraphy" tag="p" textAlign="center">
        © 2021 All rights reserved - developed on another planet 🛸
      </Text>
    </FooterWrapper>
  );
}
