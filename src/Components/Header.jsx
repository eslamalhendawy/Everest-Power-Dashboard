import { useState } from "react";

function Header() {
  const [select, setSelect] = useState(false);
  const [name, setName] = useState("اسم المستشفى");

  const toggleSelect = () => {
    setSelect(!select);
  };

  const clickHandler = (name) => {
    setName(name);
    setSelect(false);
  };

  return (
    <div className="p-6 flex justify-between items-center mb-6 bg-white">
      <button className="relative flex justify-center items-center bg-white border focus:outline-none shadow text-grey-600 rounded ">
        <p className="px-4">{name}</p>
        <span className="border-l p-2" onClick={toggleSelect}>
          <i className="fa-solid fa-angle-down"></i>
        </span>
        <div className={`absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded ${select ? "block" : "hidden"}`}>
          <ul className="text-right border- rounded">
            <li className="px-4 py-1 hover:bg-gray-100 border-b" onClick={() => clickHandler("رأس فؤاد")}>
              رأس سدر
            </li>
            <li className="px-4 py-1 hover:bg-gray-100 border-b" onClick={() => clickHandler("دار الفؤاد")}>
              دار الفؤاد
            </li>
            <li className="px-4 py-1 hover:bg-gray-100 border-b" onClick={() => clickHandler("حورس العام")}>
              حورس العام
            </li>
            <li className="px-4 py-1 hover:bg-gray-100 border-b" onClick={() => clickHandler("مستشفى القاهرة")}>
              مستشفى القاهرة
            </li>
          </ul>
        </div>
      </button>
      <div className="flex gap-6 items-center">
        <div className="p-3 size-[50px] bg-[#f0f0f1] flex justify-center items-center rounded-lg">
          <i className="fa-solid fa-user text-[#3268FF]"></i>
        </div>
        <div>
          <p className="font-bold">Name</p>
          <p className="text-sm">Admin</p>
        </div>
        <div className="p-3 size-[30px] bg-[#f0f0f1] flex justify-center items-center rounded-lg">
          <i className="fa-regular fa-bell text-[#3268FF]"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
