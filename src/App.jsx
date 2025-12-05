import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Projects from './component/Projects'
import Testimoniails from './component/Testimoniails'
import Contact from './component/Contact'
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimoniails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
