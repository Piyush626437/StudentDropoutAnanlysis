import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from './Component/Table';
import TableData from './Component/Table';
import Ecommerce from './Component/Ecommerce';
import Practise from './Component/Practise';
import { createContext } from 'react';
import CompB from './Component/CompB';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactDOM } from 'react';
// import Login from './Login';
import SiginAdmin from './Component/SiginAdmin';
import SiginSchool from './Component/SiginSchool';
import SchoolDashboard from './SchoolDetail/SchoolDashboard';
import AdminDashboard from './AdminDetail.jsx/AdminDashboard';
import SchoolAdd from './AdminDetail.jsx/SchoolAdd';
import StudentData from './SchoolDetail/StudentData';
import Byage from './Analysis.jsx/Byage';
import Bygender from './Analysis.jsx/Bygender';
import UploadForm from './UploadForm';
import Upload from './Upload';

const fname = createContext();
function App() {
  return (
    <>

      {/* <Router>
        <Route path="/" element={<Home />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        
</Router> */}

      <Router>

        <Routes>            
          <Route>
          <Route path="/" exact element={<Home />} />

          {/* <Route path="/about" exact element={<About/>} /> */}
          <Route path="/siginadmin" exact element={<SiginAdmin />} />
          <Route path="/siginschool" exact element={<SiginSchool />} />
          <Route path="/SchoolDashboard" exact element={<SchoolDashboard />} />
          <Route path="/AdminDashboard" exact element={<AdminDashboard />} />
          <Route path="/schooladd" exact element={<SchoolAdd />} />
          <Route path="/studentadd" exact element={<StudentData />} /> 
          <Route path="/Byage" exact element={< Byage />} /> 
          <Route path="/Bygender" exact element={< Bygender />} /> 
          <Route path="/upload" exact element={< Upload />} /> 
        </Route>
        </Routes>

      </Router>


      {/* <Home/> */}
      {/* <Login/> */}



    </>
  );
}

export default App;
export { fname };
