import React from 'react';
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <>
      <div className="App">
        <header className='h-[10vh] sticky top-0 dark:bg-zinc-900 bg-zinc-50 flex items-center justify-between px-8'>
          <h1 className='text-xl font-bold font-albertsans'>CydeOS</h1>
          <button data-tooltip-id='downloadbtnfail' data-tooltip-content='Cannot Download - Still in development' data-tooltip-place='bottom'>Download</button>
        </header>
        <div className='flex justify-center items-center p-4 m-2 dark:bg-blue-400 bg-blue-200 rounded-md h-36	'>
          <h1>Lets Speed up your old phones. using <span>CydeOS</span></h1>
          <p>CydeOS is a fast Operating System Using Android 10/11 Designed For Old Phones</p>
        </div>
      </div>
      <Tooltip
         id='downloadbtnfail'/>
    </>
  );
}

export default App;


