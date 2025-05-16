import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Viaggi from "./pages/Viaggi"
import Utenti from "./pages/Utenti"
import DefaultLayout from "./layout/DefaultLayout"


function App() {


  return (
    <>
      <BrowserRouter>


        <Routes>

          <Route element={<DefaultLayout />} >

            <Route path="/" element={<Main />} />
            <Route path="/viaggi" element={<Viaggi />} />
            <Route path="/utenti" element={<Utenti />} />

          </Route>

          <Route path="*" element={<div>page not found</div>} />

        </Routes>


      </BrowserRouter >
    </>
  )
}

export default App


