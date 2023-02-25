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
      </div>
      <Tooltip
         id='downloadbtnfail'/>
    </>
  );
}

export default App;


