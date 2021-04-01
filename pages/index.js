/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Menu from '../src/Components/Menu';
import { Grid } from '../src/layout/Grid';
import { Box } from '../src/layout/Box';
import Text from '../src/Components/commons/Text';
import Button from '../src/Components/commons/Button';
import Footer from '../src/Components/Footer';
import Eye from '../src/Components/Eye';
import Modal from '../src/Components/commons/Modal';
import FormContact from '../src/Components/FormContact';
import SEO from '../src/Components/commons/SEO';

export default function Home() {
  const [modalContact, setModalContact] = React.useState(false);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <SEO headTitle="Home" />

      <Menu />

      <Modal modal={modalContact} setModal={setModalContact}>
        <FormContact />
      </Modal>

      <Grid.Container margin="32px 0px 0px 0px">
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, lg: 5 }}
            offset={{ xs: 0, lg: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            order={{ xs: 2, lg: 1 }}
          >
            <Text
              type="title"
              tag="h1"
              color="primary"
              textAlign={{
                xs: 'center',
                lg: 'left',
              }}
              margin={{
                xs: '16px 0px 0px 0px',
                md: '32px 0px 0px 0px',
              }}
            >
              always seeking knowledge
            </Text>
            <Text
              type="paragraphy"
              tag="p"
              color="primary"
              textAlign={{
                xs: 'center',
                lg: 'left',
              }}
              margin={{
                xs: '16px 0px 0px 0px',
                md: '32px 0px 0px 0px',
              }}
            >
              Hello, my name is João. I’m a developer, designer and illustrator.
              Always looking for new technologies and languages, even if they
              are on other universes...
            </Text>

            <Button
              variant="default"
              display="block"
              margin={{
                xs: '32px 0px 0px 0px',
                lg: '32px auto 0px 0px',
              }}
              onClick={() => setModalContact(!modalContact)}
            >
              let's talk
            </Button>
          </Grid.Col>
          <Grid.Col
            display="flex"
            alignItems="center"
            justify-content="center"
            flexDirection="column"
            value={{ xs: 12, lg: 6 }}
            order={{ xs: 1, lg: 2 }}
            margin={{
              xs: '16px 0px 0px 0px',
              md: '64px 0px 0px 0px',
            }}
          >
            <Eye />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
