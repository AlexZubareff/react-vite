import "./Form.css";
import { useState } from "react";

export function Form() {
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  // function openModal() {
  //     setIsModalOpen(false);
  // }


  const [formData, setFormData] = useState({email: "",phone: "",message: ""});

  // function handleEmailChange(event) {
  //   console.log(event.target.value);
  //   setEmail(event.target.value);
  // }
  // function handlePhoneChange(event) {
  //   console.log(event.target.value);
  //   setPhone(event.target.value);
  // }
  // function handleMessageChange(event) {
  //   console.log(event.target.value);
  //   setMessage(event.target.value);
  // }




  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };





  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);


    // debugger


  }



  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          // onChange={handleEmailChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          // onChange={handlePhoneChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          cols="33"
          value={formData.message}
          onChange={handleChange}
          // onChange={handleMessageChange}
        ></textarea>
        <button type="submit" className="send-button">отправить</button>



      </form>
    </>
  );
}
