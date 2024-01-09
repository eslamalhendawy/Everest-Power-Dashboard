import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  const [selected, setSelected] = useState("main");
  const links = [
    {
      page: "main",
      title: "اللوحة الرئيسية",
      logo: "fa-solid fa-chart-pie",
      link: "/",
    },
    {
      page: "operations",
      title: "اوامر التشغيل",
      logo: "fa-solid fa-hammer",
      link: "/operations",
    },
    {
      page: "asstes",
      title: "الاصول",
      logo: "fa-solid fa-boxes-stacked",
      link: "/assets",
    },
    {
      page: "maintenance",
      title: "صيانة وقائية و تصحيحية",
      logo: "fa-solid fa-toolbox",
      link: "/maintenance",
    },
    {
      page: "users",
      title: "المستخدمين",
      logo: "fa-solid fa-user",
      link: "/users",
    },
  ];

  const logout = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div className="h-screen w-fit sticky right-0 top-0 shadow-lg p-2 lg:p-6 flex flex-col justify-between items-center">
      <div>
        <h2 className="text-[#151D48] font-bold lg:text-4xl mb-6">Dashboard</h2>
        <ul className="flex flex-col space-y-2">
          {links.map((link, index) => {
            return (
              <Link onClick={() => setSelected(link.page)} to={link.link} key={index}>
                <li className={`flex p-3 cursor-pointer rounded-lg flex-row-reverse justify-center lg:justify-start items-center gap-2 text-[#737791] hover:bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] hover:text-white duration-300 ${selected == link.page ? "bg-gradient-to-l from-[#4D7DFF] to-[#1C48C2] text-white" : ""}`}>
                  <i className={`${link.logo} `}></i>
                  <p className="text-right hidden lg:block">{link.title}</p>
                </li>
              </Link>
            );
          })}
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
