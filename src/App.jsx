// import { useState } from 'react'
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Blog } from './pages/Blog';
import { Reviews } from './pages/Reviews';
import { Review } from './pages/Review';
import { Mainlayout } from './layout/Mainlayout';
import { Routes, Route } from "react-router-dom";
import { Contact } from './pages/Contact';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

<Routes>
  <Route path="/" element={<Mainlayout />}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="blog" element={<Blog />}/>
    <Route path="review" element={<Reviews />}/>
    <Route path="review/:id" element={<Review />}/>
        <Route path="contact" element={<Contact />}/>
    <Route path="*" element={<Home />}/>

  </Route>

</Routes>

    </>
  )
}

export default App
