import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div className='w-screen'>
      {/* <Placeholder /> */}

      {/* <NavBar /> */}
      <AboutMe />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <HireMe /> */}


    </div>
  )
}


function Placeholder() {
  return (<><div>      <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
    <h1 className='text-3xl font-bold '>Vite + react</h1>
    <div className="card">
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p></div></>)

}

function AboutMe() {
  return (
    <>
      <section className='w-full'>
        <div className='min-h-screen flex flex-row justify-between items-center'>
          <div className='w-1/2 h-1/2 bg-red-500'>Here</div>
          <div className='w-1/2 justify-self-start'>
            <h6 className='font-title'>Hello, my name is</h6>
            <h1 className='font-title'>Lucien Tran</h1>
            <h3 className='font-body'>I build <b>(and design!)</b> websites.</h3>
            <p className='font-body'>I design/build websites and mobile application at night, and work as a firmware test engineer by day. Having worked as a disability support worker for more than 4 years, I believe in building accessible technologies.</p>
            <p className='font-body'>Website Designer/Developer | Firmware Test Engineer | Electronics Engineer
            </p></div>
        </div>
      </section>

    </>
  )
}

function NavBar() {
  return (<><div></div></>)
}

function Skills() {
  return (
    <>
      <section className='w-full'>
        <div className='min-h-screen flex flex-row justify-between items-center'>
          <p>HELLO</p>
          <p>HELLO</p>
        </div>
      </section>

    </>
  )

}

function Projects() {
  return (
    <>
      <section className='w-full'>
        <div className='min-h-screen flex flex-row justify-between items-center'>
          <p>HELLO</p>
          <p>HELLO</p>
        </div>
      </section>

    </>
  )

}
function HireMe() {
  return (
    <>
      <section className='w-full'>
        <div className='min-h-screen flex flex-row justify-between items-center'>
          <p>HELLO</p>
          <p>HELLO</p>
        </div>
      </section>

    </>
  )

}
export default App
