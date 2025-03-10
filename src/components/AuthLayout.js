import React from 'react';
import { Box, Container, Paper } from '@mui/material';

const AuthLayout = ({ children }) => {
  const newLocal = "";
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url('/assets/background4k.jpg')",
        backgroundRepeat: 'no-repeat',  // Prevents the background from repeating
        backgroundSize: 'cover',       // Ensures the image covers the area
        padding: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: { xs: 2, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "rgba(209, 209, 209, 0.65)",
            borderRadius: '20px',          // Adjust the value to your preferred border radius
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthLayout;
