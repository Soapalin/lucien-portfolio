import '../App.css';
import visage from '../semi professional photo.png';
import React from 'react';
import { Container, Grid, Box, Button } from '@mui/material';
import { Fade } from "react-awesome-reveal";




class AboutMe extends React.Component {
  render() {
    return <Box className="column">
      <Box justifyContent="center" alignItems="center" >
        <Grid container spacing={0} alignItems="center" justifyContent="flex-end" >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
            <Box sx={{ height: { xs: "50vh", sm: "50vh", md: "40vh", lg: "50vh", xl: "50vh" }, width: { xs: "100vw", sm: "100vw", md: "100vw", lg: "50vw", xl: "50vw" } }} display="flex" justifyContent="center" alignItems="center">
              <Box sx={{ height: { xs: "45vw", sm: "35vw", md: "30vw", lg: "20vw", xl: "20vw" }, width: { xs: "45vw", sm: "35vw", md: "30vw", lg: "20vw", xl: "20vw" }, border: 1, borderColor: "#E3DDDA", position: "absolute", marginLeft: "3w", marginTop: "3w", zIndex: "1" }} >
              </Box>
              <Box sx={{ height: { xs: "45vw", sm: "35vw", md: "30vw", lg: "20vw", xl: "20vw" }, width: { xs: "45vw", sm: "35vw", md: "30vw", lg: "20vw", xl: "20vw" }, marginBottom: "5vw", marginLeft: "-5vw", zIndex: "2" }} >
                <img src={visage} className="logo-small" alt="visage" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ background: { xs: "#E3DDDA", sm: "#E3DDDA", md: "#E3DDDA", lg: "#89BF71", xl: "#89BF71" } }}>
            <Container className="column" sx={{ color: "#3E3E3E", textAlign: { xs: "center", sm: "center", md: "center", lg: "left", xl: "left" }, minHeight: { xs: "50vh", sm: "50vh", md: "45vh" }, width: { xs: "70vh", sm: "70vh", md: "70vh", lg: "50vw", xl: "50vw" }, paddingRight: { lg: "15vw", xl: "15vw" } }}>
              <Fade direction="bottom">
                <h6 >Hi, my name is</h6>
              </Fade>
              <Fade direction="bottom" delay={500}>
                <h1 >Lucien Tran</h1>
              </Fade>
              <Fade direction="bottom" delay={1000}>
                <h3 className="smaller-h3">I build <span className="type-animation"></span> websites.</h3>
                <p className='body'>
                  I design/build websites and mobile application at night, and work as a firmware test engineer by day. Having worked as a disability support worker for more than 4 years, I believe in building accessible technologies.</p>
                <p className='body2'><i>Website and Mobile App Designer/Developer | Firmware Test Engineer | Electronics Engineer</i></p>

              </Fade>
            </Container>

          </Grid>
        </Grid>
        <Button className="long-button btn"><Box className="long-button"><h1>Check out my socials! #-</h1></Box></Button>
      </Box>
      {/* <Box className="row" sx={{
          minHeight: "100vh",
        }}>
          <Grid container spacing={2} direction="row" alignItems="flex-start" justifyContent="flex-start" >
            <Grid item lg={6} xl={6} md={12} sm={12} justifyContent="center" alignItems="center">
              <Box sx={{ width: "50vw", height: "100vh", }}>
                <Box className="bg-secondary" sx={{
                  width: "15em",
                  height: "15em",
                  position: "absolute",
                  left: "10em",
                  top: "8.5em",
                }}>
                </Box>
                <Box className="bg-primary" sx={{
                  width: "15em",
                  height: "15em",
                  left: "7em",
                  top: "6em",
                  position: "absolute",
                }}>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} xl={6} md={12} sm={12} justifyContent="center" alignItems="center">
              <Box sx={{ textAlign: "start", lineHeight: 1.1 }} className="column">
                <h6 >Hi, my name is</h6>
                <h1 className="lineUp" style={{ "line-height": "0.1vh" }}>Lucien Tran</h1>
                <h3 className="smaller-h3">I build <span className="type-animation"></span> websites.</h3>
                <p className='body'>
                  I design/build websites and mobile application at night, and work as a firmware test engineer by day. Having worked as a disability support worker for more than 4 years, I believe in building accessible technologies.</p>
                <p className='body2'>Website and Mobile App Designer/Developer | Firmware Test Engineer | Electronics Engineer</p>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
    </Box>;
  }
}


export default AboutMe;