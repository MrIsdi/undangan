import { BrowserRouter, Routes, Route } from "react-router-dom"
import Vira from "./pages/Vira"

export default function App(){
  document.body.style.fontFamily = "'Montserrat', sans-serif"
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/invite/:name" element={<Vira />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}