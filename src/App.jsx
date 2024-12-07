// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Content from './components/Content';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Signup from './components/Signup';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Content />

//       <h2>Home Page</h2>
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Navbar />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<h2>Login Page</h2>} />
//         </Routes>
//       </BrowserRouter> */}
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import LoanTypes from './components/Loantypes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Userloandetails from './components/Userloandetails';
import LoanApprover from './components/LoanApprover';
import AdminLogin from './components/AdminLogin';
import LoanApproverHome from './components/LoanApproverHome';
import AdminHome from './components/AdminHome';
import AddLoanApprover from './components/AddLoanApprover';
import UpdateLoanApprover from './components/UpdateLoanApprover';
import DeleteLoanApprover from './components/DeleteLoanApprover';
import GetLoanApprover from './components/GetLoanApprover';
import DetailsGot from './components/DetailsGot';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';
import GetUser from './components/GetUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login name= "User" loginType="user"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/loantypes" element={<LoanTypes />} />
          <Route path="/userloandetails" element={<Userloandetails />} />
          <Route path="/loginapprover" element={<LoanApprover />} />
          <Route path="/loginadmin" element={<AdminLogin />} />
          <Route path="/approverhome" element={<LoanApproverHome />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/approverhome" element={<LoanApproverHome />} />
          <Route path="/addloanapprover" element={<AddLoanApprover name={'AddHealthApplication'}/>} />
          <Route path="/updateloanapprover" element={<UpdateLoanApprover />} />
          <Route path="/deleteloanapprover" element={<DeleteLoanApprover name={'DeleteHealthApplication'}/>} />
          <Route path="/getloanapprover" element={<GetLoanApprover />} />
          <Route path="/adduser" element={<AddUser name={'AddUser'}/>} />
          <Route path="/updateuser" element={<UpdateUser />} />
          <Route path="/deleteuser" element={<DeleteUser name={'DeleteUser'}/>} />
          <Route path="/getuser" element={<GetUser />} />
          <Route path="/detailsgot" element={<DetailsGot />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;