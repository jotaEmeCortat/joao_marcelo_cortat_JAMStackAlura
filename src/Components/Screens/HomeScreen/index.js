/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid } from '../../../layout/Grid';
import Button from '../../commons/Button';
import Text from '../../commons/Text';
import Eye from '../../Eye';
import { WebsitePageContext } from '../../wrapper/WebsitePages';

export default function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  return (
    <Grid.Container
      margin="32px 0px 0px 0px"
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
            Always looking for new technologies and languages, even if they are
            on other universes...
          </Text>

          <Button
            variant="default"
            display="block"
            margin={{
              xs: '32px 0px 0px 0px',
              lg: '32px auto 0px 0px',
            }}
            onClick={() => websitePageContext.toggleModalContact()}
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
  );
}
