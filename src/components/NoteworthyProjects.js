
import '../App.css';
import React from 'react';
import { Box, SvgIcon } from '@mui/material';
import { Slide } from "react-awesome-reveal";



class NoteworthyProjects extends React.Component {
    render() {
        return (
            <Box justifyContent="center" alignItems="center" className="fullpage">
                < Slide direction="bottom">
                    <Box>
                        <h1 className="page-title black">Other Noteworthy Projects</h1>
                    </Box>
                </Slide>

                <Box sx={{ display: "flex", flexDirection: "row", height: "80vh" }} justifyContent="center" alignItems="center" >
                    <ProjectCard name="Solar powered hearing aid charger" description="The aim of my year long thesis was to allow people living with hearing impairments to facilitate their day-to-day life." />
                    <Box sx={{ width: "2vw" }}></Box>
                    <ProjectCard name="Miniature Washing Machine" description="Subtitle of the project that has been completed a while ago and i need to add more text to it thanks" />
                    <Box sx={{ width: "2vw" }}></Box>
                    <ProjectCard name="Web App Express Templates" description="Subtitle of the project that has been completed a while ago and i need to add more text to it thanks" />
                </Box>
            </Box>);
    }
}

class ProjectCard extends React.Component {
    render() {
        return (
            <Box className="projectCard bg-primary" justifyContent="flex-start" alignItems="flex-end" >
                <Box sx={{ marginRight: "1vw", marginTop: "1vh", height: "15%", width: "15%", display: "flex" }} justifyContent="flex-start" alignItems="flex-end"><SvgIcon>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon></Box>
                <Box sx={{ height: "5vh" }}></Box>
                <Box sx={{ display: "flex", alignSelf: "flex-start" }}>
                    <h4>{this.props.name}</h4>
                </Box>
                <Box sx={{ display: "flex", alignSelf: "flex-start" }}>
                    <p className='body2'>{this.props.description}</p>
                </Box>
            </Box>
        );
    }
}

export default NoteworthyProjects;