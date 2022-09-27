import '../App.css';
import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import { Fade, Slide } from "react-awesome-reveal";



// function checkIfMobile() {
//   const [theme, matches] = useState(0);
//   const theme = useTheme();
//   const matches = ;
//   console.log(matches)
// }
class HeaderNav extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     theme: useTheme(),
    //     matches: useMediaQuery(theme.breakpoints.up('sm')),
    //   };
    // }
    render() {
        return <Container sx={{ height: "15vh" }}>
            < Slide direction="bottom">
                <Grid container spacing={4} direction="row" alignItems="center" justifyContent="flex-start" wrap="nowrap">
                    {/* <Grid item sm={1} md={1} lg={1} xl={1} alignItems="flex-start" justifyContent="flex-start">
            <img src={logo} className="logo-small" alt="logo" />
          </Grid> */}
                    <Grid item xs={7} sm={8} md={4} lg={4} xl={4} alignItems="flex-start" justifyContent="flex-start"><h2 className='page-title'>Lucien Tran</h2></Grid>
                    <Grid container item spacing={0} direction="row" alignItems="baseline" justifyContent="flex-end">
                        <Grid item sm={0} md={2} lg={2} xl={3} ><a href="#SkillsTools"><h5>Skills & Tools</h5></a></Grid>
                        <Grid item sm={0} md={2} lg={2} xl={2} ><a href="#ProjectPage"><h5>Projects</h5></a></Grid>
                        <Grid item sm={0} md={2} lg={2} xl={2} ><a href="#ContactMe"><h5>Contact</h5></a></Grid>
                        <Grid item sm={2} md={2} lg={2} xl={2} >
                            <Fade direction="bottom" delay={500}>
                                <a href="#ContactMe"><Button variant="contained" className="btn bg-primary" ><h5>Hire Me!</h5></Button></a>
                            </Fade>
                        </Grid>
                    </Grid>
                </Grid>
            </Slide>


        </Container >;
    }
}


export default HeaderNav;