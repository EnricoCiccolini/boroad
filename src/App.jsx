import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Viaggi from "./pages/Viaggi"
import Utenti from "./pages/Utenti"
import DefaultLayout from "./layout/DefaultLayout"
import DettagliViaggio from "./pages/DettagliViaggio"
import { useState } from "react"
import viaggi from "../data/viaggi"
import user from "../data/utenti"

export default function App() {

  const [viaggio, setViaggio] = useState(viaggi);
  const [utenti, setutenti] = useState(user);

  return <div>

    <BrowserRouter>


      <Routes>

        <Route element={<DefaultLayout />} >

          <Route path="/" element={<Homepage viaggio={viaggio} />} />
          <Route path="/viaggi" element={<Viaggi viaggio={viaggio} setViaggio={setViaggio} />} />
          <Route path="/viaggi/:slug" element={<DettagliViaggio />} />
          <Route path="/utenti" element={<Utenti utenti={utenti} setUtenti={setutenti} />} />

        </Route>

        <Route path="*" element={<div>page not found</div>} />

      </Routes>


    </BrowserRouter >
  </div>
};



