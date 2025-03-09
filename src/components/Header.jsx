import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Place from '@mui/icons-material/PlaceOutlined';
import Help from '@mui/icons-material/HelpOutlineOutlined';
import Favorite from '@mui/icons-material/FavoriteBorderOutlined';
import Person from '@mui/icons-material/PersonOutlineOutlined';
import Language from '@mui/icons-material/LanguageOutlined';
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import { Breadcrumbs, Link } from '@mui/material';
import Button from '@mui/material/Button';
import Search from '@mui/icons-material/SearchOutlined';
import { FormControl, FormHelperText, InputAdornment, OutlinedInput } from '@mui/material';

const pages = [
    'Living', 'Dining', 'Outdoor', 'Office', 'Lighting', 'Rugs', 
    'Accessories', 'Brands', 'Inspiration','Gifts', 'Sale'
];

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="absolute" color="dark" elevation={0} sx={{borderBottom: '1px solid grey', borderTop: '4px solid black'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, fontSize: 35 }}
            color='black'
          >
            EQ3
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 20}}>
                <Link underline="hover" color="black" href="/">
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Place/>
                    </Box>
                </Link>
                <Link underline="hover" color="black" href="/">
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Help/>
                    </Box>
                </Link>
                <Link underline="hover" color="black" href="/">
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Favorite/>
                    </Box>
                </Link>
                <Link underline="hover" color="black" href="/">
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Person/>
                        <Typography>Join/Login to EQ3</Typography>
                    </Box>
                </Link>
                <Link underline="hover" color="black" href="/">
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Language/>
                        <Typography>EN / CAD</Typography>
                    </Box>
                </Link>
                
            </Breadcrumbs>
            <Button variant="outlined" startIcon={<Cart/>} sx={{ color : 'black', marginLeft: 2, border: '1.5px solid grey'}}>
                Cart (0)
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar position="absolute" color="dark" sx={{ top: 64,}} elevation={0}>
        <Toolbar>
            {pages.map((page) => (
                <Button sx={{color: 'black', fontSize: 15, textTransform: 'none', fontWeight: 400}}>
                    {page}
                </Button>
            ))}
            <Box sx={{ flexGrow: 1 }} />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end"><Search/></InputAdornment>}
                    placeholder='Search'
                    sx={{height: 45, width: 230}}
                />
            </FormControl>
        </Toolbar>
        <Box sx={{backgroundColor: 'orange', width: '100hw', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography sx={{ fontSize: 15, fontWeight: '700'}}>
                Labour Day: Enjoy 20% Off EQ3
            </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
