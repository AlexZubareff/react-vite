// import { useState, useEffect, useContext } from "react";
import { createContext, useEffect, useState } from 'react'; 
import {SLIDER} from '../components/Const/Slider';
import Dots from '../components/Dots/Dots';
import Slide from '../components/Slide/Slide';

export const SliderContext = createContext();

export function About() {
const [data, setData] = useState(SLIDER);

// console.log(SLIDER.length);

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
                slideCount: data.length,
            }}>
            <Slide />    
            <Dots/>
            </SliderContext.Provider>
           

          {/* {data.map(() => <Dots count={data.length}/>)} */}
        </div>
      
    )
}