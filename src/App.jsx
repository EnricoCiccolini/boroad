import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Viaggi from "./pages/Viaggi"
import Utenti from "./pages/Utenti"
import DefaultLayout from "./layout/DefaultLayout"
import DettagliViaggio from "./pages/DettagliViaggio"

function App() {

  return (
    <>
      <BrowserRouter>


        <Routes>

          <Route element={<DefaultLayout />} >

            <Route path="/" element={<Homepage />} />
            <Route path="/viaggi" element={<Viaggi />} />
            <Route path="/viaggi/:slug" element={<DettagliViaggio />} />
            <Route path="/utenti" element={<Utenti />} />

          </Route>

          <Route path="*" element={<div>page not found</div>} />

        </Routes>


      </BrowserRouter >
    </>
  )
}

export default App


