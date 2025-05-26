// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Bannar from './Components/Bannar';
import Apps from './Components/Apps';
import Reports from './Components/Reports';
import Mediation from './Components/Mediation';
import Campaigns from './Components/Campaigns';
import Policy from './Components/Policy';
import Help from './Components/Help';
import Login from './Components/Login';
import SingUp from './Components/SingUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route with NavBar and Outlet */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Bannar />} />
          <Route path="Apps" element={<Apps />} />
          <Route path="Reports" element={<Reports />} />
          <Route path="Mediation" element={<Mediation />} />
          <Route path="Campaigns" element={<Campaigns />} />
          <Route path="Policy" element={<Policy />} />
          <Route path="Help" element={<Help />} />
        </Route>

        {/* Outside Layout Routes (without NavBar) */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
