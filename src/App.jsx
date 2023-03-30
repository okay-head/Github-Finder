import Navbar from "./navigation/Navbar";
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from "./RoutesComponent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesComponent />
      </BrowserRouter>
    </>
  )
}