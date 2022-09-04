
import '../App.css';
import React from 'react';
import { Grid, Box } from '@mui/material';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


class SkillsTools extends React.Component {
    render() {
        return <Box className="row" sx={{
            minHeight: "95vh",
            marginTop: "5vh",
            marginLeft: "2.5vw",
            marginRight: "2.5vw",
        }}>
            <Grid container spacing={5} justifyContent="space-between">
                <Grid item md={4} lg={4} xl={4}>
                    < Slide right>
                        <Box className="bg-primary column" sx={{
                            height: "70vh",
                            p: "4vh"
                        }}>

                            < Fade bottom>
                                <h2 className='text-start'>I design and build stuff...</h2>
                                <p className="body2 text-start">websites and mobile applications.</p>
                            </Fade>
                        </Box>
                    </Slide>

                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    < Slide bottom>
                        <Box className="bg-primary column" sx={{
                            height: "50vh",
                            p: "4vh"
                        }}>
                            < Fade bottom>
                                <h2 className='text-start'>I work as a ...</h2>
                                <p className="body2 text-start">Firmware Test Engineer at Finisar WSS.</p>
                            </Fade>
                        </Box>
                    </Slide>

                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    < Slide left>
                        <Box className="bg-primary column" sx={{
                            height: "30vh",
                            p: "4vh"
                        }}>
                            < Fade bottom>
                                <h2 className='text-start'>I graduated from...</h2>
                                <p className="body2 text-start">a Bachelor of Electrical Engineering at UTS.</p>
                            </Fade>
                        </Box>
                    </Slide>

                </Grid>
            </Grid>
        </Box>
            ;
    }
}


export default SkillsTools;