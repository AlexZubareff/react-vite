import classes from "./Dots.module.css";
import Dot from "./Dot";
import { SliderContext } from "../../pages/About";
import { useContext } from "react";

export default function Dots({count}) {
    console.log(count)
const {slideCount} = useContext(SliderContext);
//   let count = slideCount;
  const renderDots = () => {
    console.log()

      const dots = [];
      for (let i = 0; i < slideCount; i++) {

          dots.push(<Dot number={i}/>)

      }
      console.log(dots)
      return dots;
  }

  return <div className={classes['dots-container']}>{renderDots()}</div>;
}
