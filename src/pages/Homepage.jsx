import { useState } from "react";
import ConnectBtn  from "../components/button/connect-btn/Connect-btn";
import  Modal  from "../components/modal/Modal";
import MyPhoto from "../img/photo.jpg";
// import { Form } from "../components/form/Form";

export function Homepage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // function openModal() {
    //     setIsModalOpen(true);
    // }


// function handleClick(type) {
//     console.log('HANDLE', type)
// }

    return (
        <>
        <div className="main-wrap">
          <div className="content">
            <div className="rectangle"></div>
            <div className="title">Меня зовут Алексей, я вэб разработчик</div>
            <div className="text">
              Я создаю высокопроизводительные, красивые веб-сайты, которые
              ориентированы на конверсию, соответствуют бренду и удобны для
              людей.
            </div>

            <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <ConnectBtn setIsModalOpen={setIsModalOpen} />

            {/* <ConnectBtn onClick={() => {setIsModalOpen(true)}} /> */}

          </div>
          <div className="content-photo">
            <img src={MyPhoto} />
          </div>
        </div>

        </>
    )
}