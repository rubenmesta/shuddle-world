import React, { useState } from 'react';
import { Navbar, Footer, Button } from 'odyssey-design-system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from '../utils/colors';
import * as data from '../data';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Logo from './Logo';
import { Box } from '@mui/material';

const theme = createTheme();

const Layout = ({ children }) => {
  const { navItems, col1, col2, col3, social } = data;

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar
          logo={<Logo width={200} />}
          background={colors.primary[900]}
          itemsColor={colors.secondary[100]}
          items={navItems.map((i) => {
            return <a>{i}</a>;
          })}
          mobileMenuColor={colors.white[500]}
          withLogIn
          variant="outlinePrimary"
          buttonLabel="Log In"
        />
        <Box sx={{ background: colors.neutrals[100] }}>{children}</Box>
        <Footer
          title={'Explore the Cosmos'}
          col1={col1}
          col2={col2}
          col3={col3}
          social={social}
          avatar={'/img/footer-avatar2.png'}
          buttonVariant={'secondary'}
          logo={<Logo width={200} />}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Layout;
