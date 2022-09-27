
import '../App.css';
import React from 'react';
import { Grid, Box } from '@mui/material';
import { Fade, Slide } from "react-awesome-reveal";



class SkillsTools extends React.Component {
    render() {
        return <Box id={"SkillsTools"} className="row" sx={{
            minHeight: "95vh",
            paddingTop: "5vh",
            marginLeft: "2.5vw",
            marginRight: "2.5vw",
        }}>
            <Grid container spacing={5} justifyContent="space-between">
                <Grid item md={4} lg={4} xl={4}>
                    < Slide direction="right">
                        <Box className="bg-primary column" sx={{
                            height: "70vh",
                            p: "4vh"
                        }}>

                            < Fade direction="bottom">
                                <h2 className='text-start'>I design and build stuff...</h2>
                                <p className="body2 text-start">websites and mobile applications.</p>
                            </Fade>
                        </Box>
                    </Slide>

                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    < Slide direction="bottom">
                        <Box className="bg-primary column" sx={{
                            height: "50vh",
                            p: "4vh"
                        }}>
                            < Fade direction="bottom">
                                <h2 className='text-start'>I work as a ...</h2>
                                <p className="body2 text-start">Firmware Test Engineer at Finisar WSS.</p>
                            </Fade>
                        </Box>
                    </Slide>

                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    < Slide direction="left">
                        <Box className="bg-primary column" sx={{
                            height: "30vh",
                            p: "4vh"
                        }}>
                            < Fade direction="bottom">
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