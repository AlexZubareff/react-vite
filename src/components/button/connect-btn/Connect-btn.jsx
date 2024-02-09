import "./Connect-btn.css";
import PropTypes from "prop-types";

export default function ConnectBtn({ setIsModalOpen }) {
  // console.log('props: ', props);
  // console.log(setIsModalOpen);

  // function openModal() {
  //     setIsModalOpen(true)
  // }

  return (
    // <button className="connect-btn" onClick={openModal}>Связаться со мной</button>

    // <button className="connect-btn" onClick={()=>{onClick(true)}}>Связаться со мной</button>

    <button
      className="connect-btn"
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      Связаться со мной
    </button>
  );
}

ConnectBtn.propTypes = {
  setIsModalOpen: PropTypes.node,
  children: PropTypes.node,
};
