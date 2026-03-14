import React ,{useState} from 'react'
import { FaFacebook,FaLinkedinIn,FaInstagram,FaGithub } from 'react-icons/fa'
export default function Header() {

  const [activeLink,setActiveLink] = useState(3)

  return (

      <>
        <nav className='navbar navbar-expand-sm b navbar-dark fixed-top' style={{color : '#fff' , backgroundColor : 'rgb(93, 0, 255)'}}>
          <div className='container-fluid px-5'>
            <a href='#' className='navbar-brand h1 me-5' style={{fontSize : '28px'}}>Portfolio</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#collapseibleNavbar'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-center ' id='collapseibleNavbar' style={{fontSize : '19px'}} >
              <ul className='navbar-nav w-50 justify-content-center gap-xxl-5 gap-sm-3'>
                <li className='nav-item'>
                  <a href='#Home'className={activeLink === 0 ? "activeA nav-link" : "navA nav-link"}
                    onClick={() => setActiveLink(0)} >Home</a>
                </li>
                <li className='nav-item'>
                  <a href='#Skills' className={activeLink === 1 ? "activeA nav-link" : "navA nav-link"}
                    onClick={() => setActiveLink(1)}>Skills</a>
                </li>
                <li className='nav-item'>
                  <a href='#Project'  className={activeLink === 2 ? "activeA nav-link" : "navA nav-link"}
                    onClick={() => setActiveLink(2)}>Project</a>
                </li>
                <li className='nav-item d-flex justify-content-between gap-xxl-3' style = {{fontSize : '21px'}}>
                  <a href="https://www.linkedin.com/in/fady-atef-2a0522379/" target="_blank" className='nav-link hoverLinks'><FaLinkedinIn/></a>
                  <a href="https://www.facebook.com/fady.alparns.7/" target="_blank" className='nav-link hoverLinks'><FaFacebook/></a>
                  <a href="https://www.instagram.com/fady67247" target="_blank" className='nav-link hoverLinks'><FaInstagram/></a>
                  <a href="https://github.com/Fod88" target="_blank" className='nav-link hoverLinks'><FaGithub/></a>
                </li>
              </ul>
              <button  className='btn border-white rounded-0 mt-md-0 ms-md-5 mt-sm-5 headerBtn' type='button'>Let's Connect</button>
            </div>
          </div>
        </nav>
      </>
  )
}
