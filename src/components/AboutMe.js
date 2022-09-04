import '../App.css';
import visage from '../semi professional photo.png';
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';




class AboutMe extends React.Component {
  render() {
    return <Box className="column">
      <Box justifyContent="center" alignItems="center" sx={{ minHeight: "85vh" }}>
        <Grid container spacing={0} alignItems="center" justifyContent="flex-end" >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Box sx={{ height: "85vh", width: { xs: "100vw", sm: "50vw", md: "50vw", lg: "50vw", xl: "50vw" } }} display="flex" justifyContent="center" alignItems="center">
              <Box sx={{ height: { xs: "35vw", sm: "20vw", md: "20vw", lg: "20vw", xl: "20vw" }, width: { xs: "35vw", sm: "20vw", md: "20vw", lg: "20vw", xl: "20vw" }, border: 1, borderColor: "#E3DDDA", position: "absolute", marginLeft: "3w", marginTop: "3w", zIndex: "1" }} >
              </Box>
              <Box sx={{ height: { xs: "35vw", sm: "20vw", md: "20vw", lg: "20vw", xl: "20vw" }, width: { xs: "35vw", sm: "20vw", md: "20vw", lg: "20vw", xl: "20vw" }, bgcolor: "green", marginBottom: "5vw", marginLeft: "-5vw", zIndex: "2" }} >
                <img src={visage} className="logo-small" alt="visage" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ background: { xs: "#BEA074" } }}>
            <Container sx={{ textAlign: "left" }}>
              <Fade bottom>
                <h6 >Hi, my name is</h6>
              </Fade>
              <Fade bottom delay={500}>
                <h1 >Lucien Tran</h1>
              </Fade>
              <Fade bottom delay={1000}>

                <h3 className="smaller-h3">I build <span className="type-animation"></span> websites.</h3>
                <p className='body'>
                  I design/build websites and mobile application at night, and work as a firmware test engineer by day. Having worked as a disability support worker for more than 4 years, I believe in building accessible technologies.</p>
                <p className='body2'>Website and Mobile App Designer/Developer | Firmware Test Engineer | Electronics Engineer</p>

              </Fade>
            </Container>
          </Grid>
        </Grid>
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