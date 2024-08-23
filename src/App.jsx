import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <h1 className='text-7xl'>Hello Blog</h1>
      <Outlet />
    </>
  )
}

export default App
