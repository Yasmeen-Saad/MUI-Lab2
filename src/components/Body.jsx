import {Box, Typography, Button} from '@mui/material'
import React from 'react'
import Body1 from '../assets/body1.jpg';
import Body2 from '../assets/body2.jpg';
import Body3 from '../assets/body3.jpg';

export default function Body() {
  return (
    <>
        <Box
            sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90vw",
            height: "80vh",
            backgroundColor: "#EAEAEA",
            padding: "0 5%",
            marginY: "5rem",
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-47vw',
        }}>
            <Box
            component="img"
            src={Body1}
            alt="Living Room"
            sx={{
                width: "50%",
                height: "100%",
                objectFit: "cover",
                margin: "0 -2.8%",
            }}/>

            <Box
            sx={{
                width: "50%",
                margin: "0 -2.8%",
                height: "85%",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                <Box sx={{ width: "100%" ,}}>
                    <Typography variant="h5" fontWeight="400" fontSize={35} color="black" align="left" m={3}>
                        AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
                    </Typography>
                    <Typography variant="body1" color="text.secondary" m={3} align="left">
                        Affirm provides flexible payment solutions, allowing you to buy better
                        and pay over time.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: "black", textTransform: "none"}} m={3}>
                        Learn More
                    </Button> 
                </Box>
            </Box>
        </Box>
        <Box
            sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90vw",
            height: "80vh",
            backgroundColor: "#EAEAEA",
            padding: "0 5%",
            marginY: "5rem",
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-47vw',
        }}>
            <Box
            sx={{
                width: "50%",
                margin: "0 -2.8%",
                height: "85%",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                <Box sx={{ width: "100%" ,}}>
                    <Typography variant="h5" fontWeight="400" fontSize={35} color="black" align="left" m={3}>
                        CHOOSE WITH CONFIDENCE
                    </Typography>
                    <Typography variant="body1" color="text.secondary" m={3} align="left">
                        Remove the guesswork in choosing your upholstery design by ordering
                        complimentary swatches.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: "black", textTransform: "none"}} m={3}>
                        Order Swatches
                    </Button> 
                </Box>
            </Box>
            <Box
            component="img"
            src={Body2}
            alt="Living Room"
            sx={{
                width: "50%",
                height: "100%",
                objectFit: "cover",
                margin: "0 -2.8%",
            }}/>
        </Box>
        <Box
            sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90vw",
            height: "80vh",
            backgroundColor: "#EAEAEA",
            padding: "0 5%",
            marginY: "5rem",
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-47vw',
        }}>
            <Box
            component="img"
            src={Body3}
            alt="Living Room"
            sx={{
                width: "50%",
                height: "100%",
                objectFit: "cover",
                margin: "0 -2.8%",
            }}/>

            <Box
            sx={{
                width: "50%",
                margin: "0 -2.8%",
                height: "85%",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                <Box sx={{ width: "100%" ,}}>
                    <Typography variant="h5" fontWeight="400" fontSize={35} color="black" align="left" m={3}>
                        COMPLIMENTRY DESIGN SERVICES
                    </Typography>
                    <Typography variant="body1" color="text.secondary" m={3} align="left">
                        Let's create your dream space together.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: "black", textTransform: "none"}} m={3}>
                        Book A Consultation
                    </Button> 
                </Box>
            </Box>
        </Box>
    </>
  )
}