import React from 'react';
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeatureCard } from "./components/cards";
import { ComputerDesktopIcon, CheckBadgeIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
function App() {
  return (
    <>
      <div className="App">
        <header className='h-[10vh] sticky top-0 dark:bg-zinc-900 bg-zinc-50 flex items-center justify-between px-8'>
          <h1 className='text-xl font-bold font-albertsans'>CydeOS</h1>
          <button data-tooltip-id='downloadbtnfail' data-tooltip-content='Cannot Download - Still in development' data-tooltip-place='bottom'>Download</button>
        </header>
      </div>
      <Tooltip
        id='downloadbtnfail' />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compatibility" element={<Compat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return (
    <>
      <div className='flex justify-center items-center p-4 m-2 dark:bg-zinc-600 bg-zinc-100 rounded-md h-80	flex-col space-y-6 shadow-2xl'>
        <h1 className='text-3xl font-albertsans font-bold mx-2'>Lets Speed up your old phones. using <span className='bg-gradient-to-r from-primaryBlue-primary to-primaryBlue-50 bg-clip-text text-transparent'>CydeOS</span></h1>
        <div className='flex justify-center p-'><p>CydeOS is a fast Operating System Using Android 10/11 Designed For Old Phones. <a href="./compatibility">Check Compatibility Here</a> </p></div>
      </div>
      <div className='p-2'>
        <h1 className='text-3xl font-albertsans font-bold'>Features</h1>
        <div className='flex justify-center'>
          <div className='flex items-center flex-col  w-72 m-4 p-4 dark:bg-zinc-700 bg-zinc-400 shadow-md rounded-md'>
            <ComputerDesktopIcon className='w-11' />
            <FeatureCard title='Open' text='CydeOS Is Open-Source so that means Everybody, Including you can modify the code' />
          </div>
          <div className='flex items-center flex-col w-72 m-4 p-4 dark:bg-zinc-700 bg-zinc-400 shadow-md rounded-md'>
            <CheckBadgeIcon className='w-11' />
            <FeatureCard title='Fast' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut' />
          </div>
          <div className='flex items-center flex-col w-72 m-4 p-4 dark:bg-zinc-700 bg-zinc-400 shadow-md rounded-md'>
          <DevicePhoneMobileIcon className='w-11'/>
            <FeatureCard title='Compatible' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut' />
          </div>
        </div>
      </div>
    </>
  )
}

function Compat() {
  return (
    <>

    </>
  )
}

function NotFound() {
  return (
    <>
      <h1>We Didnt find the page you were searching for!</h1>
    </>
  )
}

export default App;


