import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <div>Navbar</div>
      <h1 className='text-7xl'>Hello Blog</h1>
      <Outlet />
    </>
  )
}

export default App
