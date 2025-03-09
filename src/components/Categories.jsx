import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ReadyToShip from '../assets/ready-to-ship-upholstery.png';
import Dining from '../assets/dining.png';
import StorageBeds from '../assets/storage-beds.png';
import Lighting from '../assets/lighting.png';
import AccentTables from '../assets/accent-tables.png';
import Rugs from '../assets/rugs.png';
import BarCounter from '../assets/bar-counter-stools.png';
import AccentStools from '../assets/accent-stools.png';
import Accessories from '../assets/accessories.png';
import AccentChairs from '../assets/accent-chairs.png';
import Outdoor from '../assets/outdoor.png';
import MediaStorage from '../assets/media-storage.png';

const categories = [
    {name: 'Ready to Ship Upholstery', image: ReadyToShip},
    {name: 'Dining', image: Dining},
    {name: 'Storage Beds', image: StorageBeds},
    {name: 'Lighting', image: Lighting},
    {name: 'Accent Tables', image: AccentTables},
    {name: 'Rugs', image: Rugs},
    {name: 'Bar & Counter Stools', image: BarCounter},
    {name: 'Accent Stools', image: AccentStools},
    {name: 'Accessories', image: Accessories},
    {name: 'Accent Chairs', image: AccentChairs},
    {name: 'Outdoor', image: Outdoor},
    {name: 'Media & Storage', image: MediaStorage},
];

export default function Categories() {
  return (
    <>
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column', 
            marginTop: '100px', 
            alignItems: 'flex-start', 
            width: '90vw', 
            justifyContent: 'center',
            padding: 0,
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-47vw',
            marginBottom: '-40px',
            paddingBottom: '40px',
        }}>
            <Typography sx={{fontSize: 35, fontWeight: '400', color: 'black', marginY: '20px'}}>
                SHOP BY CATEGORY
            </Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '15px'}}>
                {categories.map((category) => (
                    <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: '#EAEAEA', width: '290px', height: '320px'}}>
                        <img style={{padding: '70px'}} src={category.image} alt="Ready to Ship" />
                        <Typography sx={{fontSize: 16, fontWeight: '400', color: 'black', marginTop: '-30px'}}>
                            {category.name}
                        </Typography>
                    </Box>   
                ))}
            </Box>
        </Box>
    </>
  );
}