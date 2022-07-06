import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import './styles/global.css'

export function App () {
  return (
    <div>
      <BrowserRouter>
        <Router  />
      </BrowserRouter>
    </div>
  )
}