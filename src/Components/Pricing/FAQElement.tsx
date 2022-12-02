import React from 'react';
import { createStyles, Image, Accordion, Grid, Col, Container, Title } from '@mantine/core';
import image from './SVGs/image1.svg';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl * 2,
    margin: theme.spacing.xl * 1.5,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export default function FaqWithImage() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container p={60} size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} align="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion>
              
              <Accordion.Item value="What data will MyNext4 take from my school?" className={classes.item}>
                <Accordion.Control>What data will MyNext4 take from my school?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="How does MyNext4 ensure privacy?" className={classes.item}>
                <Accordion.Control>How does MyNext4 ensure privacy?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item
                value="Is MyNext4 "
                className={classes.item}
              >
                <Accordion.Control>Is MyNext4</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
                
              </Accordion.Item>

              <Accordion.Item
                value="Do you store credit card information securely?"
                className={classes.item}
              >
                <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
                
              </Accordion.Item>

              <Accordion.Item
                value="What payment systems to you work with?"
                className={classes.item}
              >
                <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}