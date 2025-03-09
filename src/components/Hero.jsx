import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import HeroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <>
        <Box sx={{
            backgroundImage: `url(${HeroImg})`, 
            width: '100vw', 
            height: '100vh', 
            backgroundSize: 'cover',
            marginTop: '135px', 
            padding: 0,
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50.7vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            marginBottom: '-40px',
            paddingBottom: '40px'
        }}>
            <Box sx={{width: '100%'}}>
                <Typography sx={{fontSize: 40, fontWeight: '500', color: 'white', margin: '20px'}}>
                    LABOUR DAY: ENJOY 20% OFF EQ3
                </Typography>
                <Typography sx={{fontSize: 25, color: 'white'}}>
                    Save on designs made with longevity in mind. Now until September 3rd.
                </Typography>
            </Box>
        </Box>
    </>
  );
}