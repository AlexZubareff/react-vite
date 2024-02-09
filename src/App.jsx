// import { useState } from 'react'
import {Homepage} from './pages/Homepage';
import {Aboutpage} from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Reviewspage } from './pages/Reviewspage';
import { Mainlayout } from './layout/Mainlayout';
import { Routes, Route } from "react-router-dom";
import { Contact } from './pages/Contact';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

<Routes>
  <Route path="/" element={<Mainlayout />}>
    <Route index element={<Homepage />}/>
    <Route path="about" element={<Aboutpage />}/>
    <Route path="blog" element={<Blogpage />}/>
    <Route path="review" element={<Reviewspage />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="*" element={<Homepage />}/>

  </Route>

</Routes>

    </>
  )
}

export default App
