
import Navbar from "./navbar"
import Home from "./Home"
import Footer from "./Footer"
import "./App.css"
import { Outlet } from "react-router-dom"



function App() {
 

  return (
    <>
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App
