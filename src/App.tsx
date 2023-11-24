import { BrowserRouter, Routes, Route } from "react-router-dom"
import Vira from "./pages/Vira"

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/vira/:name" element={<Vira />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}