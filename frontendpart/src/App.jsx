// import { useState } from "react";
// import AdminLogin from "./Component/AdminLogin.jsx";
// import AdminPanel from "./Component/AdminPanel.jsx";

// function App() {
//   const [isAdmin, setIsAdmin] = useState(
//     Boolean(localStorage.getItem("token"))
//   );

//   return isAdmin ? (
//     <AdminPanel />
//   ) : (
//     <AdminLogin onLogin={() => setIsAdmin(true)} />
//   );
// }

// export default App;
import React from 'react'
import Navbar from './Component/Navbar.jsx'
function App() {
  return (
   <Navbar />
  )
}

export default App