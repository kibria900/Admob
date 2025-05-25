import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar';
import Bannar from './Components/Bannar';
import Login from './Components/Login';
import SingUp from './Components/SingUp';
import Apps from './Components/Apps';
import Campaigns from './Components/Campaigns';
import Help from './Components/Help';
import Mediation from './Components/Mediation';
import Policy from './Components/Policy';
import Reports from './Components/Reports';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar></NavBar> */}


      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<NavBar/>}></Route>
        <Route path='/Apps' element={<Apps/>}></Route>
        <Route path='/Campaigns' element={<Campaigns/>}></Route>
        <Route path='/Help' element={<Help/>}></Route>
        <Route path='/Mediation' element={<Mediation/>}></Route>
        <Route path='/Policy' element={<Policy/>}></Route>
        <Route path='/Reports' element={<Reports/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/SingUp' element={<SingUp/>}></Route>
      </Routes>
      </BrowserRouter>







      {/* <Bannar></Bannar> */}
      {/* <Login></Login>
      <SingUp></SingUp> */}
    </>
  )
}

export default App
