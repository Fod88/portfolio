import React from 'react'
import img  from'./images/image.png'
import firpro1  from'./images/firpro1.png'
import firpro2  from'./images/firpro2.png'
import firpro3  from'./images/firpro3.png'
import firpro4  from'./images/firpro4.png'
import firpro5  from'./images/firpro5.png'
import firpro6  from'./images/firpro6.png'
export default function Firsection() {
  return (
   <>
     <div className='container m-auto my-5 row justify-content-center align-content-lg-around gap-4'>
      <div className='firchildDiv col-lg-4 col-sm-11 my-3 mx-3 p-0  '>
        <div className='fircontent'>
          <h2>Project 1</h2>
          <p> simple design with HTML and CSS</p>
        </div>
        <img src={firpro1} alt='First Project' className='img-fluid' style={{height : '250px'}} />
      </div>
      <div className='firchildDiv col-lg-4 col-sm-11 my-3 mx-3 p-0'>
        <div className='fircontent'>
          <h2>Capital Shop</h2>
          <p> Online Store HTML and CSS3 Design </p>
        </div>
        <img src={firpro2} alt='Second Project' className='img-fluid' style={{height : '250px'}} />
      </div>
      <div className='firchildDiv col-lg-4 col-sm-11 my-3 mx-3 p-0'>
        <div className='fircontent'>
          <h2>Restaurant webSite</h2>
          <p> Design with Bootstrap 5 </p>
        </div>
        <img src={firpro3} alt='Third Project' className='img-fluid' style={{height : '250px'}} />
      </div>
      <div className='firchildDiv col-lg-4 col-sm-11 my-3 mx-3 m-sm- p-0 '>
          <div className='fircontent'>
          <h2>Next Tech</h2>
          <p>  disign with HTML , CSS and JavaScript </p>
        </div>
        <img src={firpro4} alt='fourth Project' className='img-fluid' style={{height : '250px'}} />
      </div>
      <div className='firchildDiv col-lg-4 col-sm-11 my-3 mx-3 p-0'>
        <div className='fircontent'>
          <h2>E-commerce</h2>
          <p> design With React jS </p>
        </div>
        <img src={firpro5} alt='fifth Project' className='img-fluid' style={{height : '250px'}} />
      </div>
      <div className='firchildDiv col-lg-4 col-sm-11 my-3 mx-3 p-0'>
        <div className='fircontent'>
          <h2>Portfolio</h2>
          <p> design with React JS </p>
        </div>
        <img src={firpro6} alt='First Project' className='img-fluid' style={{height : '250px'}} />
      </div>
    </div>
   </>
  )
}
