import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import { Button } from 'odyssey-design-system';

const VerticalSection = () => {
  return (
    <SectionWrapper>
      <Content>
        <Title>
          Exoplanet Proxima Centauri b Shows Promise for Habitability
        </Title>
        <Body>
          Scientists are excited about the potential habitability of Proxima
          Centauri b, an exoplanet in our neighboring star system. Learn about
          the latest research, including the planet's proximity to Earth and its
          potential to harbor liquid water.
        </Body>
        <Box sx={{ width: '300px' }}>
          <Button variant="secondar" label="Explore" withArrow />
        </Box>
      </Content>
    </SectionWrapper>
  );
};

const SectionWrapper = styled(Box)({
  maxWidth: '80vw',
  display: 'flex',
  padding: '5rem',
  margin: '5rem auto 0 auto',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundImage: 'url("/img/people2.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh',
  borderTopRightRadius: '64px',
  borderTopLeftRadius: '64px',
});

const Content = styled(Box)({
  width: '60%',
});

const Title = styled(Typography)({
  fontSize: '3rem',
  color: colors.white[500],
  fontFamily: 'IBM Plex Serif',
  marginBottom: '3rem',
});

const Body = styled(Typography)({
  fontSize: '1.5rem',
  color: colors.white[500],
  marginBottom: '3rem',
});

export default VerticalSection;
