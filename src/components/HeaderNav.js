import '../App.css';
import React from 'react';
import { Container, Grid, Button, Box } from '@mui/material';
import { Fade, Slide, Flip } from "react-awesome-reveal";
import logo from "../Property 1=Default.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function HeaderNav() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    if (matches === true) {
        return <Container sx={{ height: "15vh" }}>
            < Slide direction="bottom">
                <Grid container spacing={4} direction="row" alignItems="center" justifyContent="flex-start" wrap="nowrap">

                    <Grid item xs={7} sm={7} md={4} lg={4} xl={4} alignItems="flex-start" justifyContent="flex-start"><Flip><img alt="logo" src={logo}></img></Flip></Grid>
                    <Grid container item spacing={0} direction="row" alignItems="baseline" justifyContent="flex-end">
                        <Grid item xs={0} sm={0} md={3} lg={3} xl={3} ><h5><a href="#SkillsTools">Skills & Tools</a></h5></Grid>
                        <Grid item xs={0} sm={0} md={2} lg={2} xl={2} ><h5><a href="#ProjectPage">Projects</a></h5></Grid>
                        <Grid item xs={0} sm={0} md={2} lg={2} xl={2} ><h5><a href="#ContactMe">Contact</a></h5></Grid>
                        <Grid item xs={0} sm={2} md={2} lg={2} xl={2} >
                            <Fade direction="bottom" delay={500}>
                                <a href="#ContactMe"><Button variant="contained" className="btn bg-primary" ><h5># Hire Me!</h5></Button></a>
                            </Fade>
                        </Grid>

                    </Grid>
                </Grid>
            </Slide>


        </Container >;
    } else {
        return <Container sx={{ height: "15vh" }}>
            < Slide direction="bottom">
                <Grid container spacing={4} direction="row" alignItems="center" justifyContent="flex-start">

                    <Grid item xs={7} sm={7} md={4} lg={4} xl={4} alignItems="flex-start" justifyContent="flex-start"><Flip><img alt="logo" src={logo}></img></Flip></Grid>
                    <Grid item xs={5} sm={5} direction="row" alignItems="baseline" justifyContent="flex-end">

                    </Grid>
                </Grid>
            </Slide >
        </Container >;

    }

}


export default HeaderNav;