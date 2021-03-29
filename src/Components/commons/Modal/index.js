import React, { useRef } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Button from '../Button';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

const ModalWrapper = styled.div`
  display: flex;
  flex:1;
  align-items: stretch;
  flex-direction:column;
  background: rgba(0,0,0,0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  z-index: 100;
`;
const bondJamesBond = keyframes`
 0% {
    transform:translateX(1000px);
  }
  80% {
    transform:translateX(0px);
    border-radius:75px;
    height:75px;
    width:75px;
  }
  90% {
    border-radius:3px;
    height:182px;
    width:247px;
  }
  100% {
    border-radius:3px;
    height:162px;
    width:227px;
  }

 `;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.secondary};
  display:flex;
  flex:1;
  flex-direction:column;
  padding: 48px;
 
  ${breakpointsMedia({
    lg: css`
       max-width:50%;
      `,
  })}

/* animation: ${bondJamesBond} 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000); */
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Modal({ modal, setModal, children }) {
  const modalRef = useRef();
  const closeModal = ({ target }) => {
    if (modalRef.current === target) {
      setModal(false);
    }
  };

  if (modal) {
    return (

      <ModalWrapper
        onClick={closeModal}
        ref={modalRef}

      >

        {modal && <LockScroll />}

        <ModalContent
          /* variants={{
            open: {
              x: '0%',
            },
            closed: {
              x: '-100%',
            },
          }}
          animate={!modal ? 'open' : 'closed'}
          transition={{
            duration: 0.5,
          }} */
        >

          <Button
            variant="back"
            onClick={() => setModal()}
            margin="0px auto 16px 0px"
            padding="8px 16px"
          >
            Back
          </Button>

          {children}

        </ModalContent>
      </ModalWrapper>
    );
  } return (
    null
  );
}

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
