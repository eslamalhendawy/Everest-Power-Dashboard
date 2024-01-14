import React from "react";
import HalfCircle from "./HalfCircle";

function OperationCommands() {
  const list = [
    {
      name: "امر التشغيل 1",
      place: "عمليات",
      condition: "قيد المعالجة",
      color: "#3268FF",
    },
    {
      name: "امر التشغيل 2",
      place: "جراحة",
      condition: "تمت المعالجة",
      color: "#07E0987A",
    },
    {
      name: "امر التشغيل 3",
      place: "اطفال",
      condition: "فشلت المعالجة",
      color: "#FF5656",
    },
  ];
  return (
    <div className="xl:flex gap-6 justify-between items-center p-6 bg-white rounded-lg mb-6 mx-2 lg:mx-6">
      <div>
        <div className="flex flex-col md:justify-end md:flex-row gap-4">
          {/* Map  */}
          <HalfCircle values={{ name: "Hello", precent: 90 }}></HalfCircle>
          <HalfCircle values={{ name: "Hello", precent: 90 }}></HalfCircle>
        </div>
        {/* Chart */}
      </div>
      <div>
        <h4 className="text-right text-[#05004E] font-bold text-2xl my-6">اوامر التشغيل</h4>
        <div>
          {list.map((info, index) => {
            return (
              <div className="flex flex-row-reverse gap-6 mb-6" key={index}>
                <div className="flex flex-row-reverse xl:flex-col text-right gap-2 lg:gap-1 basis-1/2">
                  <p className="text-xl xl:text-base font-semibold">{info.name}</p>
                  <p className="text-xl xl:text-base font-semibold">{info.place}</p>
                </div>
                <div className="basis-1/2">
                    <p className={`text-xl xl:text-sm text-nowrap font-semibold text-right bg-[#${info.condition == "تمت المعالجة" ? "07E0987A" : info.condition == "قيد المعالجة" ? "3268FF" : "FF5656"}] p-2 ml-auto rounded-lg w-fit`} >{info.condition}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OperationCommands;
