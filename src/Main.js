import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import { Link , Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { useState } from 'react';
import Email from './E-mail'
import Footer from './Footer';

export default function Main() {
 
  const [activeLink,setActiveLink] = useState(3)
  
  return (
    <div>
       <Home/>
        <Skills />
        <Projects/>

        <nav className='proNav mb-3'> 
            <Link to = {'firsection'} className={activeLink === 0 ? 'navLink active' : 'navLink'}
              onClick={()=> setActiveLink(0)}
            >
              1est Section
            </Link>
            <Link to = {'secsection'}className={activeLink === 1?'navLink active' : 'navLink'}
              onClick={()=> setActiveLink(1)}
            >
              2nd Section
            </Link>
            <Link to = {'thrsection'} className={activeLink === 2 ? 'navLink active' : 'navLink'}
              onClick={()=> setActiveLink(2)}
            >
              3rd Section
            </Link>
        </nav> 
        <Outlet/>
        <Email/>
        <Footer/>
    </div>
  )
}
