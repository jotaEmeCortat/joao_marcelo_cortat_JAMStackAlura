import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text, { TextTypes } from '../Text';

const InputWrapper = styled.div`
  margin-bottom: 32px;
  margin-top: 32px;
  
`;

const Input = styled(Text)`
  background:transparent;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.background.primary};
  padding: 16px;
  outline: 0;
  border-radius: 7px;
  ${TextTypes.paragraphy}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  type,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        tag="input"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
