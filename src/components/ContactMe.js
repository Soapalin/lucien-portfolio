import '../App.css';
import React from 'react';
import { Grid, Button, Box, TextField, SvgIcon, Avatar } from '@mui/material';
import { Fade, Slide } from "react-awesome-reveal";



class ContactForm extends React.Component {
    render() {
        return (<Box className="column">
            <TextField
                required
                fullWidth
                id="name"
                label="Name" />
            <Box sx={{ height: "2vh" }}></Box>
            <TextField
                required
                fullWidth
                id="email"
                label="Email" />
            <Box sx={{ height: "2vh" }}></Box>
            <TextField
                id="description"
                label="Description"
                multiline
                fullWidth
                maxRows={4}
            // value={value}
            // onChange={handleChange}
            />
            <Box sx={{ height: "4vh" }}></Box>
            <Button variant="contained" endIcon={<SvgIcon>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>}>Send Message</Button>
        </Box>);
    }
}

class ContactMe extends React.Component {
    render() {
        return (
            <Box id={"ContactMe"} justifyContent="center" alignItems="center" className="fullpage black">
                < Slide direction="bottom">
                    <Box className="paragraph"><h1>Catch up for a coffee or hire me!</h1></Box>
                </Slide>
                <Fade direction="bottom" delay={500}>

                    <Box className="paragraph">
                        <p className="body">I'll never miss a chance to have coffee. I am interested in freelance opportunities - large and small. Feel free to reach out to me if you have any questions or would like to catch up.</p>
                    </Box>
                </Fade>

                <Box sx={{ height: "5vh" }}></Box>
                <Box className="row" sx={{ width: "70vw" }}>
                    <Grid container spacing={8} justifyContent="space-between" alignItems="center">
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                            <Avatar className="bg-primary" sx={{ height: "20vw", width: "20vw" }} variant="square">N</Avatar>
                        </Grid>
                        <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                            <ContactForm />
                        </Grid>
                    </Grid>

                </Box>
            </Box>

        );
    }
}

export default ContactMe;