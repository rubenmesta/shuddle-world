import logo from './logo.svg';
import './App.css';
import { Hero, Card, Section } from 'odyssey-design-system';
import { Typography, Box, Grid, Divider } from '@mui/material';
import { colors } from './utils/colors';
import { cards, sections } from './data';
import styled from '@emotion/styled';
import VerticalSection from './components/VerticalSection';

import Layout from './components/Layout';
const news = {
  image: '/img/card1.webp',
  title: "NASA's Perseverance Rover Discovers Ancient Riverbed on Mars",
  body: "This is a significant milestone in our quest to understand the history of water on Mars and, importantly, whether the planet ever supported life,\" said Dr. Sarah Johnson, a planetary geologist at NASA's Jet Propulsion Laboratory.\n\nScientists are excited about the potential of the rock samples Perseverance will collect from this region. These samples may hold clues about Mars' ancient climate and whether it was ever habitable. Future missions to Mars, including sample return missions, will play a crucial role in unlocking the secrets of the Red Planet.\n\nNASA's Perseverance rover continues to make groundbreaking discoveries on Mars, and each new finding brings us closer to answering the age-old question: Is there, or was there ever, life on Mars?",
  variant: 'purple',
  buttonText: 'Learn More',
};

function App() {
  return (
    <Layout>
      <Hero
        image={'/img/hero-image-md.jpg'}
        variant="medium"
        backgroundColor={colors.primary[900]}
        title={"Discover the Universe's Secrets"}
        subtitle={'Stay Informed with the Latest Space News'}
        secondaryCta={'Read Now'}
        secondaryCtaVariant={'secondary'}
        contentAlignment="center"
        search={false}
      />
      <GridContainer>
        <Grid container spacing={5}>
          <Grid Box xs={8}>
            <Section
              title={news.title}
              body={news.body}
              style={{ padding: 0 }}
              flexBasis="100%"
              padding="0 8rem"
              fontSize={'3rem'}
            />
          </Grid>
          <Grid Box xs={4} mb={'3rem'}>
            <Card
              image={'/img/card1.webp'}
              title={
                'Astronomers Uncover a New Exoplanet with Earth-Like Conditions'
              }
              body={
                'In a breakthrough discovery, a team of astronomers has identified a distant exoplanet located within the habitable zone of its star. This exoplanet, named Kepler-452b, bears striking similarities to Earth and could potentially support liquid water and, by extension, life. With its stable climate and sun-like star, Kepler-452b is a promising candidate for future exploration and the search for extraterrestrial life.'
              }
              buttonText={'Read More'}
              variant={'primary'}
              width={'100%'}
            />
          </Grid>
        </Grid>
      </GridContainer>
      <Box
        sx={{
          padding: 0,
        }}
      >
        {sections.map((section) => {
          return (
            <Section
              image={section.image}
              title={section.title}
              body={section.body}
              buttonText={section.buttonText}
              flip={section.flip}
              variant={section.variant}
              padding={'1rem 5rem'}
              background={colors.primary[100]}
            />
          );
        })}
      </Box>
      <GridContainer>
        <Grid container spacing={5}>
          <Grid Box xs={8}>
            <Section
              title={news.title}
              body={news.body}
              style={{ padding: 0 }}
              flexBasis="100%"
              padding="0 8rem"
              fontSize={'3rem'}
            />
          </Grid>
          <Grid Box xs={4}>
            <Card
              title={'Featured Article'}
              body={
                'Dive into the enigmatic world of black holes, where the laws of physics break down, and time and space warp.'
              }
              width={'100%'}
            />
            <Divider sx={{ margin: '1rem 0' }} />
            <Card
              title={'Upcoming Astronomy Events'}
              body={
                "Don't miss the spectacular Perseid meteor shower on August 12th. Grab your telescope and find the best viewing spot."
              }
              width={'100%'}
            />
            <Divider sx={{ margin: '1rem 0' }} />
            <Card
              title={'In Space News'}
              body={
                'Explore the cosmos through our lens. Stay updated with the latest space discoveries, astronomical events, and interstellar adventures.'
              }
              width={'100%'}
            />
          </Grid>
        </Grid>
      </GridContainer>
      <Container>
        <Typography
          variant="h2"
          fontFamily={'IBM Plex Serif'}
          ml={'2.5rem'}
          fontWeight={700}
        >
          Latest Space News
        </Typography>
        <CardsContainer>
          {cards.map((card) => {
            return (
              <Card
                image={card.image}
                title={card.title}
                body={card.body}
                buttonText={card.buttonText}
                variant={card.variant}
              />
            );
          })}
        </CardsContainer>
      </Container>

      <VerticalSection />
    </Layout>
  );
}

const GridContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '70%',
  margin: '5rem auto',
  whiteSpace: 'pre-line',
});

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1200px',
  margin: '5rem auto',
});

const CardsContainer = styled.div({
  display: 'flex',
  margin: '2rem auto',
  gap: '2rem',
  justifyContent: 'center',
});

const SectionsContainer = styled.div({
  display: 'flex',
  margin: '2rem auto',
  gap: '2rem',
  justifyContent: 'center',
});

export default App;
