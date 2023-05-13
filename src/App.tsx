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
          <img src="/public/nvglogo.png" alt="Novagon Logo" />
          <button data-tooltip-id='downloadbtnfail' data-tooltip-content='This part is still in development!' data-tooltip-place='bottom'>Contact</button>
        </header>
      </div>
      <Tooltip
        id='downloadbtnfail' />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-4 m-2 space-y-6 rounded-md dark:bg-zinc-600 bg-zinc-100 h-80'>
        <h1 className='mx-2 text-3xl font-albertsans'>Welcome to <span className="font-bold text-primaryBlue-primary">Novagon</span>.</h1>
        <div className='flex justify-center p-'><p>Uniting CydeOS and Novagon Web.</p></div>
      </div>
      <div className='p-2'>
        <h1 className='text-3xl font-bold font-albertsans'>Apps by Novagon</h1>
        <div className='flex'>
          <p>This Part is still in development. Come Back later.</p>
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
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className="flex flex-col items-center justify-center p-5">
        <h1 className='p-2'>404</h1>
        <p className='p-2'>We Didnt find the page you were searching for!</p>
        <a href="/">go back</a>
      </div>
    </div>
  )
}

export default App;


