import React from 'react';
import Menu from '../src/Components/Menu';
import { Grid } from '../src/layout/Grid';
import Text from '../src/Components/commons/Text';
import { Button } from '../src/Components/commons/Button';

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <Menu />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={1}
            value={{ xs: 12, md: 5 }}
          >
            <div>
              <Text>
                always seeking knowledge
              </Text>
              <Text>
                Hello, my name is João. I’m a developer, designer and illustrator. Always looking for new technologies and languages, even if they are on other universes...
              </Text>

              <Button>
                Let's talk
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              alt="imagem"
              style={{ display: 'block', margin: 'auto' }}
              src="https://placehold.it/400x400"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

    </div>
  );
}
