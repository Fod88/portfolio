import React,{useState,useEffect, } from 'react'
import { FaCircleArrowRight, } from "react-icons/fa6";
import imgHome from './images/home.png'
export default function Home() {
     const words = [
    "React JS",
    "Web Developer",
    "FrontEnd Developer"
  ]
  const [indexWord,setIndexWord] = useState(0)
  const [indexChar,setIndexChar] = useState(0)
  const [text,setText] = useState("")
  const [isDeleting,setIsDeleting] = useState(false)
  useEffect(()=>{
      const speed = isDeleting ? 80 : 120
      const interval = setInterval(()=>{
        const currentWord = words[indexWord]
        if(!isDeleting){
          setText(currentWord.slice(0,indexChar + 1))
          setIndexChar(prev => prev + 1)
          if(indexChar === currentWord.length){
              setTimeout(()=> setIsDeleting(true),800)
          }
        }
        else{
            setText(currentWord.slice(0,indexChar - 1))
            setIndexChar(prev => prev - 1)
            if(indexChar === 0){
              setIsDeleting(false)
              setIndexWord(prev => (prev + 1) % words.length)
            }
            
          }
      },speed)
      return ()=>{
        clearInterval(interval)
      }
  },[indexChar,indexWord,isDeleting])
  return (
    <>
      <div className='row m-auto' id={'Home'}>
        <div className='HomeLS col-lg-4 col-sm-12 mt-lg-5 mt-md-4 m-sm-auto' style={{height : '90vh'}} >
           <h2 className='h2 border p-2 text-center mt-3' style={{ color : '#fff', backgroundColor : 'rgb(93, 0, 255)'}}>Welcome All In My Portifoloi</h2>
              <h1 className='mt-lg-5'style={{fontSize: '75px' , fontWeight:'bolder',color : 'rgb(38, 4, 97)'}} >
                Hi! I'm <break/> Fady Atef Nady, 
                {text}
                <span className="cursor">|</span>
              </h1>
              <p className='my-lg-3 ' style={{fontSize : '18px', fontWeight:'600',color : ' rgba(38, 4, 97, 0.6)'}}>Hello Everyone I have 9 months Of Experience In Web Development </p>
            <button className='btn  ' style={{color : '#fff' , backgroundColor : 'rgb(93, 0, 255)'}}>Let's Connect <FaCircleArrowRight className="arrowIcon" /></button>
        </div>
        <div className='col-lg-7 col-sm-12'>
          <img src = {imgHome} alt='Home image'className='img-fluid'  />
        </div>
      </div>
    </>
  )
}
