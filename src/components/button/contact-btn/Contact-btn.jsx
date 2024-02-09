import './Contact-btn.css'
import PropTypes from "prop-types";


export function ContactBtn({ children }) {

    function handleClick() {
        console.log('button ContactBtn clicked');
    }

    return (

        <button className="contact-btn" onClick={handleClick}>{children}</button>
    )

}

ContactBtn.propTypes = {
    children: PropTypes.node,
  }