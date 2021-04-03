import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../../layout/Box';
import Modal from '../../commons/Modal';
import Footer from '../../Footer';
import FormContact from '../../FormContact';
import Menu from '../../Menu';
import SEO from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalContact: () => {},
});

export default function WebsitePageWrapper({ children, seoProps /* menuProps */ }) {
  const [modalContact, setModalContact] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalContact: () => {
          setModalContact(!modalContact);
        },
      }}
    >
      <SEO {...seoProps} />

      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Modal modal={modalContact} setModal={setModalContact}>
          <FormContact />
        </Modal>

        {/* {menuProps.display && (<Menu />)} */}

        <Menu />

        {children}

        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
};

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
};
