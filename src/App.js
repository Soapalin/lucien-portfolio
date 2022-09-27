
import './App.css';
import AboutMe from './components/AboutMe.js';
import HeaderNav from './components/HeaderNav.js';
import SkillsTools from './components/SkillTools.js';
import ProjectPage from './components/ProjectPage.js';
import NoteworthyProjects from './components/NoteworthyProjects.js';
import ContactMe from './components/ContactMe.js';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



function App() {
  const matches = useMediaQuery('(min-width: 900px)')
  console.log(matches)

  return (
    <div className="App">
      <div className="App-header">
        <WelcomePage></WelcomePage>
        <SkillsTools ></SkillsTools>
        <ProjectPage ></ProjectPage>
        <NoteworthyProjects />
        <ContactMe />
      </div>
    </div>
  );
}



class WelcomePage extends React.Component {
  render() {
    return <Box sx={{ display: "flex", flexDirection: "column", minHeight: "60vh", background: { xs: "#A083BE", sm: "#A083BE", md: "#A083BE", lg: "linear-gradient(90deg, #A083BE 23%, #89BF71 23%)", xl: "linear-gradient(90deg, #A083BE 23%, #89BF71 23%)" } }}>
      <HeaderNav></HeaderNav>
      <AboutMe></AboutMe>
    </Box>;
  }
}





export default App;


