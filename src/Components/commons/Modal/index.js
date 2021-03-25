import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Button from '../Button';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.1);;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index:100;

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

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
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

        {modalOpen && <LockScroll />}

        <motion.div
          variants={{
            open: {
              x: 0,
            },
            closed: {
              x: '100%',
            },
          }}
          animate={modalOpen ? 'open' : 'closed'}
          transition={{
            duration: 0.5,
          }}
          style={{
            display: 'flex',
            flex: 1,
          }}
        >
          {children({
            'data-modal-safe-area': 'true',
          })}
          {/* <Button onClick={() => setModal(false)}>Fechar</Button> */}
        </motion.div>

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
