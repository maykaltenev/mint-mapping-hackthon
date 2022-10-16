import React from 'react'
import { Box, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mt={2} mb={2} px={3}>
        <Link href="https://mint-vernetzt.de/" target='_blank' underline="hover">
            <img src="/images/footer_logo.png" alt="MINTvernetzt" style={{width: '50%'}}/>
        </Link>
        
        <Stack direction="row" spacing={2}>

            <Link href="#" underline="hover">
                <Typography>
                    Impressum
                </Typography>
            
            </Link>
            <Link href="#" underline="hover">
                <Typography>
                    Datenschutzerklärung
                </Typography>
            </Link>
            <Link href="#" underline="hover">
                <Typography>
                    Nutzungsbedingungen
                </Typography>
            </Link>
            
        </Stack>
    </Box>
  )
}
