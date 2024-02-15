// import { useState, useEffect, useContext } from "react";
import { createContext, useEffect, useState } from 'react'; 
import {SLIDER} from '../components/Const/Slider';
import Dots from '../components/Dots/Dots';
import Slide from '../components/Slide/Slide';

export const SliderContext = createContext();

export function About() {
const [slideArr, setslideArr] = useState(SLIDER);
const [currentSlide, setCurrentSlide] = useState(0)

console.log(slideArr[currentSlide]);
console.log(currentSlide);

// useEffect(() => {
//   const getData = () => {
//     setData(SLIDER);
//   } 
// getData()
// },[])

    return (
        
        <div>
            <h1>Aboutpage</h1>
            <SliderContext.Provider value={{
                slideCount: slideArr.length,
                currentSlide,
            }}>
            <Slide slide={slideArr[currentSlide]} />    
            <Dots/>
            </SliderContext.Provider>
           

          {/* {data.map(() => <Dots count={data.length}/>)} */}
        </div>
      
    )
}