import { NavLink } from "react-router-dom";
import { MENU } from "../Const/Menu";



export default function Footer() {
  return (
    <div className="wrap">
        <footer>
        <div className="logo">Alexey Zubarev</div>
            <ul className="list-item">
                {MENU.map(({title, to}, i) => (
                    <li className="nav-item" key={`${i}-menu-item`} ><NavLink className="nav-link" to={to}>{title}</NavLink></li>
                ))}
            </ul>
        </footer>
    </div>
  );
}
