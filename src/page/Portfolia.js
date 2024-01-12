import React from 'react'
import PortfoliaMain from '../companent/porfolia/PortfoliaMain';
import Categories from '../companent/Categories';
import VideoCom from '../companent/VideoCom';
import PortfoliaSec from '../companent/porfolia/PortfoliaSec';
import SliderChamp from '../companent/SliderChamp';
export default function Portfolia() {
  return (
    <div> 
       <PortfoliaMain />
      <div className=' xl:container mx-auto px-[15px]'>
      
      <Categories />
      <VideoCom />
      <PortfoliaSec />
      <SliderChamp />
    </div>
    
    </div>
  
  )
}
