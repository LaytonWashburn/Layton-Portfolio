import { Outlet } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import "./styles.css"

function App() {

  return (
    <div id='main' className='bg-red'> 
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default App
