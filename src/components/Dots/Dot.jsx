import classes from "./Dots.module.css";
import { SliderContext } from "../../pages/About";
import { useContext } from "react";

// Компонент возвращающий одну точку 
export default function Dot({ number }) {
  const { currentSlide, changeSlide } = useContext(SliderContext);

  return (
    <div
      className={`${
        currentSlide === number ? classes["dot-active"] : classes["dots-item"]
      }`}
      onClick={() => changeSlide(number)}
    ></div>
  );
}
