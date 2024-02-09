import "./Modal.css";
// import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({open, setIsModalOpen}) {
  // console.log(open);

  const [formData, setFormData] = useState({email: "",phone: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false);
    setFormData({email: "",phone: "",message: ""});
  }


  const dialog = useRef();

  useEffect(() => {

    if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }

  }, [open])

  return createPortal(
    <dialog ref={dialog}>
      <button className="close-button" onClick={() => {setIsModalOpen(false)}}>X</button>
      <form onSubmit={handleSubmit}>

<label htmlFor="email">Email</label>
<input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
/>

<label htmlFor="phone">Phone</label>
<input
  type="phone"
  id="phone"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
/>

<label htmlFor="message">Message</label>
<textarea
  id="message"
  name="message"
  rows="5"
  cols="33"
  value={formData.message}
  onChange={handleChange}
></textarea>
<button type="submit" className="send-button">отправить</button>



      </form>
    </dialog>,
    document.getElementById("modal-connect")
  );
}

// Modal.propTypes = {
//   children: PropTypes.node,
// }
