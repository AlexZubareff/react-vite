import classes from "./Dots.module.css";
import Dot from "./Dot";
import { SliderContext } from "../../pages/About";
import { useContext } from "react";

// Компонент возвращающий набор точек в зависимости от количества элементов в массиве SLIDER 
export default function Dots({ count }) {
  // console.log(count);

  const { slideCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slideCount; i++) {
      dots.push(<Dot number={i}  key={i}/>);
    }
    // console.log(dots);
    return dots;
  };

  return <div className={classes["dots-container"]}>{renderDots()}</div>;
}
