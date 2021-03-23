import React from 'react';
import Menu from '../src/Components/Menu';
import { Grid } from '../src/layout/Grid';
import { Box } from '../src/layout/Box';
import Text from '../src/Components/commons/Text';
import { Button } from '../src/Components/commons/Button';
import Footer from '../src/Components/Footer';
import Eye from '../public/img/eye';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Menu />

      <Grid.Container
        marginTop={{
          xs: '32px',
          /* lg: '64px', */
        }}
      >
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
              textAlign={{
                xs: 'center',
                lg: 'left',
              }}
              marginTop="16px"
            >
              always seeking knowledge
            </Text>
            <Text
              type="paragraphy"
              tag="p"
              textAlign={{
                xs: 'center',
                lg: 'left',
              }}
              marginTop="16px"
              marginBottom="32px"
            >
              Hello, my name is João. I’m a developer, designer and illustrator. Always looking for new technologies and languages, even if they are on other universes...
            </Text>

            <Button
              margin={{
                xs: 'auto',
                lg: 'initial',
              }}
              display="block"
            >
              Let's talk
            </Button>

          </Grid.Col>
          <Grid.Col
            display="flex"
            alignItems="center"
            flexDirection="column"
            value={{ xs: 12, lg: 6 }}
            order={{ xs: 1, lg: 2 }}
          >
            <Eye />

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
