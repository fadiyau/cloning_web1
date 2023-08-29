// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Belajar from "./pages/belajar";
import Blog from "./pages/blog";
import Regist from "./pages/regist";
import Login from "./pages/login";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Homepage}/>
        <Route path="/belajar" Component={Belajar}/>
        <Route path="/regist" Component={Regist}/>
        <Route path="/login" Component={Login}/>
        <Route path="/blog" Component={Blog}/>
        <Route path="/homepage" Component={Homepage}/>
      </Routes>
    </>
  );
}


export default App;
