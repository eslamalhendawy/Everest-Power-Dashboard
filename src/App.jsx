import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Login from "./Components/Login";
import SideMenu from "./Components/SideMenu";
import MainPage from "./Components/MainPage";
import OperationCommandsPage from "./Components/OperationCommandsPage";

function App() {
  const loggedIn = Boolean(localStorage.getItem("userToken"));

  return (
    <div className={loggedIn ? "flex flex-row-reverse" : ""}>
      <Router>
        {loggedIn ? <SideMenu /> : ""}
        <Routes>
          <Route path="/" exact element={loggedIn ? <MainPage /> : <Login />} />
          <Route path="/operations" exact element={<OperationCommandsPage />} />
        </Routes>

        <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
      </Router>
    </div>
  );
}

export default App;
