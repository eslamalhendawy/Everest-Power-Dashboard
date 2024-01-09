import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Login from "./Components/Login";
import MainPage from "./Components/MainPage";



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/main" exact element={<MainPage />} />
      </Routes>
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </Router>
  );
}

export default App;
