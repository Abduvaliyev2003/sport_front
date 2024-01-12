import React from 'react'
import {
    Route,
    Routes
  } from 'react-router-dom'
   import Header from '../companent/Header';
import Footer from '../companent/Footer';
import Portfolia from './Portfolia';
export default function Main() {
  return (
    <div>

<header>  
         <Header />
      
      </header>

      <main className='  relative flex flex-col h-full'>
          <Routes>
             <Route path='/' element={<Portfolia />} />
          </Routes>
           
          
      </main>


      <footer className='bg-[#292A2F] mt-[50px]  w-full '>
         <Footer />
      </footer>
    </div>
  )
}
