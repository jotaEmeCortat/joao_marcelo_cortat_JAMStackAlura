import React from 'react';
import { links } from '../commons/Link/links';
import { MenuWrapper } from './MenuWrapper';
import { Link } from '../commons/Link';
import Button from '../commons/Button';
import Modal from '../commons/Modal';
import FormContact from '../FormContact';
import MenuMobile from './MenuMobile';

export default function Menu() {
  const [modalContact, setModalContact] = React.useState(false);
  const [modalMobile, setModalMobile] = React.useState(false);

  return (
    <MenuWrapper>
      <Modal modal={modalContact} setModal={setModalContact}>
        <FormContact />
      </Modal>
      <Modal modal={modalMobile} setModal={setModalMobile}>
        <MenuMobile />
      </Modal>
      <MenuWrapper.ButtonBackSide>
        <Link color="primary" href="/">
          back
        </Link>
      </MenuWrapper.ButtonBackSide>
      <MenuWrapper.LinksSide>
        {links.map((link) => (
          <li key={link.url}>
            <Link color="primary" href={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
        <Button
          variant="default"
          padding="8px 16px"
          onClick={() => setModalContact(!modalContact)}
        >
          contact
        </Button>
      </MenuWrapper.LinksSide>
      <MenuWrapper.ButtonMenuSide>
        <Button
          variant="back"
          padding="8px 16px"
          onClick={() => setModalMobile(!modalMobile)}
        >
          menu
        </Button>
      </MenuWrapper.ButtonMenuSide>
    </MenuWrapper>
  );
}
