import React from 'react';
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
         id='downloadbtnfail'/>
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

function Home(){
  return(
    <>
        <div className='flex justify-center items-center p-4 m-2 dark:bg-zinc-600 bg-zinc-100 rounded-md h-80	flex-col'>
          <h1 className='text-2xl font-albertsans font-bold'>Lets Speed up your old phones. using <span>CydeOS</span></h1>
          <div className='flex justify-center p-'><p>CydeOS is a fast Operating System Using Android 10/11 Designed For Old Phones.</p> <a href="./compatibility">Check Compatibility Here</a></div>
        </div>
    </>
  )
}

function Compat() {
 return(
  <>
  
  </>
 )  
}

function NotFound() {
  return(
    <>
    <h1>We Didnt find the page you were searching for!</h1>
    </>
  )
}

export default App;


