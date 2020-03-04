import React from 'react'
import logo from './logo.svg'
import './App.css'

import * as jsPDF from 'jspdf'

function App() {
  var doc = new jsPDF()

  doc.text('Hello world!', 10, 10)
  doc.save('a4.pdf')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
