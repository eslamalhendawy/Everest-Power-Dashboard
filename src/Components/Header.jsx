import { useState, useContext } from "react";
import MobileSideMenu from "./MobileSideMenu";
import StateContext from "../StateContext";

function Header() {
  const appState = useContext(StateContext);
  const [select, setSelect] = useState(false);
  const [name, setName] = useState("اسم المستشفى");

  const toggleSelect = () => {
    setSelect(!select);
  };

  const clickHandler = (name) => {
    setName(name);
    setSelect(false);
  };

  console.log();

  return (
    <div className="p-6 flex gap-6 justify-between items-center mb-6 bg-white">
      <button className="relative flex justify-center text-xs text-nowrap md:text-base items-center bg-white border focus:outline-none shadow text-grey-600 rounded-lg ">
        <p className="px-4 py-3" onClick={toggleSelect}>{name}</p>
        <span className="border-l p-2" onClick={toggleSelect}>
          <i className="fa-solid fa-angle-down"></i>
        </span>
        <div className={`absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded-lg z-[2] ${select ? "block" : "hidden"}`}>
          <ul className="text-right border rounded-lg">
            {appState.user.institutions.map((item, index) => {
              return(
                <li className="px-4 py-3 hover:bg-gray-100 border-b" onClick={() => clickHandler(item.address)} key={index}>
                  {item.address}
                </li>
              )
            })}
          </ul>
        </div>
      </button>
      <div className="flex gap-3 items-center">
        <div className="p-3  size-[35px] bg-[#f0f0f1] flex justify-center items-center rounded-lg">
          <i className="fa-solid fa-user text-[#3268FF]"></i>
        </div>
        <div>
          <p className="font-bold text-sm text-nowrap capitalize">{appState.user.name}</p>
          <p className="text-sm capitalize">{appState.user.role}</p>
        </div>
        <div className="p-3 size-[30px] bg-[#f0f0f1] flex justify-center items-center rounded-lg">
          <i className="fa-regular fa-bell text-[#3268FF]"></i>
        </div>
        <MobileSideMenu />
      </div>
    </div>
  );
}

export default Header;
