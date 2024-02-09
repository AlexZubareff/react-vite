import { ContactBtn } from "../button/contact-btn/Contact-btn";
import { NavLink } from "react-router-dom";
import './Header.css'
import { MENU } from "../Const/Menu";

export default function Header() {


    return (

<div className="wrap">
        <header>
            <div className="logo">Alexey Zubarev</div>
            <ul className="list-item">
                {MENU.map(({title, to}, i) => (
                    <li className="nav-item" key={`${i}-menu-item`} ><NavLink className="nav-link" to={to}>{title}</NavLink></li>
                ))}
            </ul>
            <NavLink className="nav-link"  to="/contact">
            <ContactBtn>контакты</ContactBtn>
            </NavLink>
        </header>
        </div>
    )
}