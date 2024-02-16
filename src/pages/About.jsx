// import { useState, useEffect, useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { SLIDER } from "../components/Const/Slider";
import Dots from "../components/Dots/Dots";
import Slide from "../components/Slide/Slide";

export const SliderContext = createContext();

export function About() {
  const [slideArr, setslideArr] = useState(SLIDER);
  const [currentSlide, setCurrentSlide] = useState(0);

  // console.log(slideArr[currentSlide]);
  // console.log(currentSlide);


// Функия изменения состояния текущего слайда при нажатии на Dot  
  const changeSlide = (number) => {
    setCurrentSlide(number);
  };

  // Функция смены текущего слайда для таймера
  const autoChangeSlide = () => {
    currentSlide >= slideArr.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };


// Запускаем таймер при первой загрузке страницы
  useEffect(() => {
    const autoSlide = setInterval(() => {
      autoChangeSlide();
    }, 3000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [currentSlide]);

  return (
    <div className="">
      <h1>Слайдер</h1>
      <SliderContext.Provider
        value={{
          slideCount: slideArr.length,
          currentSlide,
          changeSlide,
        }}
      >
        <Slide slide={slideArr[currentSlide]} />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
}
