
import '../App.css';
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Fade, Slide } from "react-awesome-reveal";




class ProjectPage extends React.Component {
    render() {
        return <Box id={"ProjectPage"} className="column" sx={{
            minHeight: "100vh",
            paddingLeft: "4vw",
            paddingRight: "4vw"
        }}>
            <Slide direction="bottom">
                <Box>
                    <h5 className="text-start page-title black">Featured Projects</h5>
                    <h2 className="text-start page-title black">AURALIS</h2>
                </Box>
            </Slide>

            <Grid container alignItems="center">
                <Grid item lg={6}>
                    <Box className="bg-primary z-index2" sx={{ height: "50vh", width: "50vw", position: "relative", alignItems: "center", display: "flex" }}>
                        <Fade direction="bottom">
                            <Container>
                                <p className="body2 text-start">AURALIS allows you to experience music.</p>
                                <Box sx={{ height: "2vh" }}></Box>
                                <p className="body2 text-start">Harnessing the power of artificial intelligence, we analyze audio in real-time through complex algorithms to create a lighting experience unique to your music.</p>
                                <Box sx={{ height: "2vh" }}></Box>
                                <p className="body2 text-start">AURALIS has been designed for home and commercial environments, whether it be for house parties, to assist live performances (for artists) or sets (for DJ’s), or beyond music AURALIS is capable of immersing yourself in gaming or to add depth to your movies.</p>
                            </Container>
                        </Fade>
                    </Box>

                </Grid>
                <Grid item lg={6}>
                    <Box className="bg-secondary" sx={{ height: "60vh", width: "50vw", marginLeft: "-5vw" }}></Box>

                </Grid>
            </Grid>

        </Box>;
    }
}

export default ProjectPage;