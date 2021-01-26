import React, { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem';

import './App.css';

function App() {

  return (
    <div className="App">

      <h1>React Accordion</h1>

      <div>

        <AccordionItem heading="List item 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem heading="List item 2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br></br>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </AccordionItem>

        <AccordionItem heading="List item 3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br></br>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br></br>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </AccordionItem>
        
      </div>

    </div>
    
  );
}

export default App;
