import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Projects() {
  return (
    <div className='projects container m-auto my-5'  id = {'Project'}>
        <div className='proTitle'>
            <h2>My Projects</h2>
            <p className='mb-5 w-75 m-auto'>
                My name is Fady Atef, and I live in El Fashn City, Beni Suef Governorate, Great Sea District.
            </p>
        </div>
    </div>
  )
}
