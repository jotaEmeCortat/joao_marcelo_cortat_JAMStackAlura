import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(51, 170, 51, .7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;

  ${({ modalOpen }) => {
    if (modalOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default function Modal({
  modalOpen, modal, setModal, children,
}) {
  if (modal) {
    return (
      <ModalWrapper
        modalOpen={modalOpen}
        onClick={(event) => {
          const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
          if (!isSafeArea) {
            setModal(false);
          }
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
        <Button onClick={() => setModal(false)}>Fechar</Button>
      </ModalWrapper>
    );
  } return null;
}

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
