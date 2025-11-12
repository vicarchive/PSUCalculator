import { useState } from 'react';
import add from './AddComponent';
import calc from './Calculator';
import './App.css';

function Main() {
    /*
    Adds a calculator tab to the webpage.
    */
    function addCalcTab() {

    }

  return (
    <>
          <div className="container">
              <div className="header">
                  <h1>PSU Calculator</h1>
                  <h3>save</h3>
                  <h3>reset</h3>
              </div>
              <div className="container">
                  /* Not sure on this syntax
                  React component that adds/ removes smaller calculator components as necessary.
                  "Add component" can go here?
                  */
              </div>
      </div>
    </>
  )
}

export default Main