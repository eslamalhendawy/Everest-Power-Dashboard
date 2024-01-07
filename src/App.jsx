import { useState } from "react";
import "./App.css";

import SideMenu from "./Components/SideMenu";
import MainPage from "./Components/MainPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row-reverse">
        <SideMenu />
        <MainPage />
    </div>
  );
}

export default App;
