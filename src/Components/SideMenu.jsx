import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function SideMenu() {
  const [selected, setSelected] = useState("main");
  const navigate = useNavigate();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleClick1 = (num) => {
    const stateArray = [open1, open2, open3, open4, open5];

    if (num === 0) {
      // Close all panels
      stateArray.forEach((_, index) => (stateArray[index - 1] = false));
    } else {
      // Toggle the selected panel and close others
      stateArray.forEach((_, index) => (stateArray[index - 1] = index === num));
    }

    // Update the state
    setOpen1(stateArray[0]);
    setOpen2(stateArray[1]);
    setOpen3(stateArray[2]);
    setOpen4(stateArray[3]);
    setOpen5(stateArray[4]);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
    location.reload();
  };

  return (
    <div className="h-screen w-fit sticky right-0 top-0 shadow-lg p-2 lg:p-6 flex flex-col justify-between items-center">
      <div>
        <h2 className="text-[#151D48] text-right font-bold lg:text-4xl mb-6">Dashboard</h2>
        <ul className="flex flex-col space-y-2">
          <Link
            onClick={() => {
              setSelected("main");
              handleClick1(0);
            }}
            to="/"
          >
            <li className={`flex p-3 cursor-pointer rounded-lg flex-row-reverse justify-center lg:justify-start items-center gap-2 text-[#737791] hover:bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] hover:text-white duration-300 ${selected == "main" ? "bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] text-white" : ""}`}>
              <i className="fa-solid fa-chart-pie"></i>
              <p className="text-right hidden lg:block">اللوحة الرئيسية</p>
            </li>
          </Link>
          <Link
            onClick={() => {
              setSelected("operations");
              handleClick1(1);
            }}
            to="/operations"
          >
            <li className={`flex p-3 cursor-pointer rounded-lg flex-row-reverse justify-between items-center gap-2 text-[#737791] hover:bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] hover:text-white duration-300 ${selected == "operations" ? "bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] text-white" : ""}`}>
              <div className="flex flex-row-reverse items-center gap-2">
                <i className="fa-solid fa-hammer"></i>
                <p className="text-right hidden lg:block">اوامر التشغيل</p>
              </div>
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </li>
          </Link>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <ul className="bg-[#EAEEF899] rounded-lg text-right">
              <Link to="/operations">
                <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                  <i className="fa-solid fa-plus"></i>
                  <p className="text-xs lg:text-base">اوامر التشغيل</p>
                </li>
              </Link>
              <Link to="/add-operation">
                <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                  <i className="fa-solid fa-plus"></i>
                  <p className="text-xs lg:text-base">اضافة امر تشغيل</p>
                </li>
              </Link>

              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">سجلات اوامر التشغيل</p>
              </li>
            </ul>
          </Collapse>
          <Link
            onClick={() => {
              setSelected("asstes");
              handleClick1(2);
            }}
            to="/assets"
          >
            <li className={`flex p-3 cursor-pointer rounded-lg flex-row-reverse justify-between items-center gap-2 text-[#737791] hover:bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] hover:text-white duration-300 ${selected == "asstes" ? "bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] text-white" : ""}`}>
              <div className="flex flex-row-reverse items-center gap-2">
                <i className="fa-solid fa-boxes-stacked"></i>
                <p className="text-right hidden lg:block">الاصول</p>
              </div>
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </li>
          </Link>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <ul className="bg-[#EAEEF899] rounded-lg text-right">
              <Link to="/assets">
                <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                  <i className="fa-solid fa-plus"></i>
                  <p className="text-xs lg:text-base">جميع الاصول</p>
                </li>
              </Link>
              <Link to="/add-asset">
                <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                  <i className="fa-solid fa-plus"></i>
                  <p className="text-xs lg:text-base">اضافة اصل</p>
                </li>
              </Link>
            </ul>
          </Collapse>
          <Link
            onClick={() => {
              setSelected("maintenance");
              handleClick1(3);
            }}
            to="/maintenance"
          >
            <li className={`flex p-3 cursor-pointer rounded-lg flex-row-reverse justify-between items-center gap-2 text-[#737791] hover:bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] hover:text-white duration-300 ${selected == "maintenance" ? "bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] text-white" : ""}`}>
              <div className="flex flex-row-reverse items-center gap-2">
                <i className="fa-solid fa-toolbox"></i>
                <p className="text-right hidden text-nowrap lg:block">صيانة وقائية و تصحيحة</p>
              </div>

              {open3 ? <ExpandLess /> : <ExpandMore />}
            </li>
          </Link>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <ul className="bg-[#EAEEF899] rounded-lg text-right">
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">بيان الصيانة خلال الشهر</p>
              </li>
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">بنود خلال الشهر</p>
              </li>
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">تقارير</p>
              </li>
            </ul>
          </Collapse>
          <Link
            onClick={() => {
              setSelected("plans");
              handleClick1(4);
            }}
            to="/plans"
          >
            <li className={`flex p-3 cursor-pointer rounded-lg flex-row-reverse justify-between items-center gap-2 text-[#737791] hover:bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] hover:text-white duration-300 ${selected == "plans" ? "bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] text-white" : ""}`}>
              <div className="flex flex-row-reverse gap-2 items-center">
                <i className="fa-solid fa-person-digging"></i>
                <p className="text-right hidden lg:block">خطط العمل</p>
              </div>
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </li>
          </Link>
          <Collapse in={open4} timeout="auto" unmountOnExit>
            <ul className="bg-[#EAEEF899] rounded-lg text-right">
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">اضافة خطة عمل</p>
              </li>
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">اضافة خطة اليوم</p>
              </li>
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">خطط خلال اليوم</p>
              </li>
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">خطط خلال الشهر</p>
              </li>
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">جميع السجلات</p>
              </li>
            </ul>
          </Collapse>
          <Link
            onClick={() => {
              setSelected("users");
              handleClick1(5);
            }}
            to="/users"
          >
            <li className={`flex p-3 cursor-pointer rounded-lg flex-row-reverse justify-between items-center gap-2 text-[#737791] hover:bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] hover:text-white duration-300 ${selected == "users" ? "bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] text-white" : ""}`}>
              <div className="flex flex-row-reverse items-center gap-2">
                <i className="fa-solid fa-user"></i>
                <p className="text-right hidden lg:block">المستخدمين</p>
              </div>
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </li>
          </Link>
          <Collapse in={open5} timeout="auto" unmountOnExit>
            <ul className="bg-[#EAEEF899] rounded-lg text-right">
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">جميع المستخدمين</p>
              </li>
              <li className="flex flex-row-reverse items-center p-3 gap-2 text-[#737791] cursor-pointer hover:text-[#000000] duration-300">
                <i className="fa-solid fa-plus"></i>
                <p className="text-xs lg:text-base">اضافة مستخدم</p>
              </li>
            </ul>
          </Collapse>
        </ul>
      </div>
      <button onClick={logout} className="flex items-center space-x-2 border-[2px] hover:bg-[#FF5656] duration-300 border-[#FF5656] p-3 group rounded-lg">
        <p className="text-[#737791] group-hover:text-white duration-300 hidden lg:block">تسجيل الخروج</p>
        <i className="fa-solid fa-right-from-bracket text-[#FF5656] group-hover:text-white duration-300"></i>
      </button>
    </div>
  );
}

export default SideMenu;
