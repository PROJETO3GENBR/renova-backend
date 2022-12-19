import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, Typography } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/material';
import './Footer.css';



function Footer (){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1' display='flex'>
                        
                        <Box padding={2} display="flex"  justifyContent="left">
                           <img id='renova_footer' src='https://i.imgur.com/oAGoVJG.png' alt='renova footer logo'/>
                        </Box>
                    <div className='box2'>
                        <Box className='icon_box'>
                            <a href="https://github.com/PROJETO3GENBR" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a href="mailto:projeto3genbr@outlook.com" target="_blank">
                                <EmailIcon className='redes' />
                            </a>
                        </Box>
                        <div id='texto'>
                            
                        Criado por Levy, Luna, Anderson, Herbert, Geovanni, Daniele e Lucas.
                        </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export { Footer };