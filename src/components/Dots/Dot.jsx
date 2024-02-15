import classes from "./Dots.module.css";
import { SliderContext } from "../../pages/About";
import { useContext } from "react";

export default function Dot({number}) {
const { currentSlide } = useContext(SliderContext);

console.log(number, currentSlide);


  return <div className={`${ currentSlide === number ? classes["dot-active"] :  classes["dots-item"]}`} ></div>;
}
