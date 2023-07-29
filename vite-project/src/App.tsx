import { useState } from 'react'
import reactLogo from './assets/react.svg'
import profilePic from './assets/photo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <div className='w-11/12 m-auto bg-white text-offblack'>
        {/* <Placeholder /> */}

        {/* <NavBar /> */}
        <AboutMe />
      </div>

      <div className='bg-beige'>
        <div className='w-11/12 m-auto bg-beige text-offblack'>
          <Skills />
          {/* <Projects /> */}
          {/* <HireMe /> */}
        </div></div>





    </div >
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
      <section className='w-full min-h-screen'>
        <div className=' flex flex-row justify-between items-center  min-h-[80vh]'>
          <div className='w-1/2 h-1/2'>
            <div className='w-1/2 h-1/2 m-auto'>
              <img src={profilePic} className='w-full h-full aspect-square' />
            </div>
          </div>
          <div className='w-1/2 mr-16'>
            <h6 className='font-title text-left text-offblack font-medium'>Hello, my name is</h6>
            <h1 className='font-title text-left leading-loose font-bold'>Lucien Tran</h1>
            <h2 className='font-title text-left leading-loose text-2xl font-semibold'>I build <i>(and design!)</i> websites.</h2>
            <p className='font-body text-left leading-relaxed'>I design/build websites and mobile application at night, and work as a firmware test engineer by day. Having worked as a disability support worker for more than 4 years, I believe in building accessible technologies.</p>
            <p className='font-body text-left leading-normal text-sm font-extralight'><i>Website Designer/Developer | Firmware Test Engineer | Electronics Engineer</i>
            </p></div>
        </div>
        <div className='w-1/2 m-auto min-h[20vh]'>
          <div className='border border-black border-solid rounded-t-3xl rounded-br-3xl'>
            <p className='font-title text-left leading-loose text-2xl font-semibold ml-10 text-center'># Check out my socials!</p>
          </div>
        </div >

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
      <section className='w-full '>
        <div className='min-h-screen flex flex-row justify-between items-center'>

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
