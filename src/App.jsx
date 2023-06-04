import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import { AppProvider } from './Api/Context'

function App() {

  return (
    <AppProvider>
       <div className="App">
          <Menu/>
          <HomePage/>
          <Footer/>
       </div>
    </AppProvider>
   
  )
}

export default App
