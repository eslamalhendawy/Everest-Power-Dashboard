function SideMenu() {
  const links = [
    {
      title: "اللوحة الرئيسية",
      logo: "fa-solid fa-chart-pie",
    },
    {
      title: "اوامر التشغيل",
      logo: "fa-solid fa-hammer",
    },
    {
      title: "الاصول",
      logo: "fa-solid fa-boxes-stacked",
    },
    {
      title: "صيانة وقائية و تصحيحية",
      logo: "fa-solid fa-toolbox",
    },
    {
      title: "المستخدمين",
      logo: "fa-solid fa-user",
    },
  ];

  return (
    <div className="h-screen w-fit sticky right-0 top-0 shadow-lg p-2 lg:p-6 flex flex-col justify-between items-center">
      <div>
        <h2 className="text-[#151D48] font-bold lg:text-4xl mb-6">Dashboard</h2>
        <ul className="flex flex-col space-y-6">
          {links.map((link, index) => {
            return (
              <li className="flex p-3 cursor-pointer rounded-lg flex-row-reverse justify-center items-center gap-3 group bg-white hover:bg-gradient-to-l from-[#1C48C2] to-[#263B74]" key={index}>
                <i className={`${link.logo} text-[#737791] group-hover:text-white duration-300`}></i>
                <p className="text-[#737791] group-hover:text-white duration-300 hidden lg:block">{link.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="flex items-center space-x-2 border-[2px] hover:bg-[#FF5656] duration-300 border-[#FF5656] p-3 group rounded-lg">
        <p className="text-[#737791] group-hover:text-white duration-300 hidden lg:block">تسجيل الخروج</p>
        <i className="fa-solid fa-right-from-bracket text-[#FF5656] group-hover:text-white duration-300"></i>
      </button>
    </div>
  );
}

export default SideMenu;
