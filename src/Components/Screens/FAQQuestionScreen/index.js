import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import Text from '../../commons/Text';
import { Box } from '../../../layout/Box';
import { Grid } from '../../../layout/Grid';

export default function FAQQuestionScreen({ category, question }) {
  const theme = useTheme();
  return (
    <Grid.Container
      flex="1"
      marginTop={{
        xs: '32px',
        md: '80px',
      }}
    >
      <Grid.Row
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <Grid.Col
          offset={{ sm: 0, lg: 1 }}
          value={{ xs: 12, md: 4, lg: 4 }}
        >
          <Text
            type="subTitle"
            color="primary"
            marginBottom="25px"
          >
            Artigos
            <br />
            Relacionados
          </Text>
          <Box
            as="ul"
            listStyle="none"
            padding="24px 30px"
          >
            {category.questions.map((currentQuestion) => (
              <Text
                key={currentQuestion.slug}
                as="li"
                variant="paragraph2"
                href={`/${currentQuestion.slug}`}
                color="primary.main"
                marginBottom="16px"
              >
                {currentQuestion.title}
              </Text>
            ))}
          </Box>
        </Grid.Col>

        <Grid.Col
          value={{ lg: 6 }}
          marginBottom={{
            xs: '50px',
            md: '0',
          }}
        >
          <Text
            type="SubTitle"
            color="primary"
          >
            {question.title}
          </Text>
          <Text
            as="p"
            type="paragraphy"
            color="primary"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: question.description }}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

FAQQuestionScreen.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })),
  }).isRequired,
  question: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
