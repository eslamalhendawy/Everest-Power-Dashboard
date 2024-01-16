import React from "react";
import HalfCircle from "./HalfCircle";
import SalesChart from "./SalesChart";

function OperationCommands() {
  const list = [
    {
      name: "امر التشغيل 1",
      place: "عمليات",
      condition: "قيد الانتظار",
    },
    {
      name: "امر التشغيل 2",
      place: "جراحة",
      condition: "انتهاء",
    },
    {
      name: "امر التشغيل 3",
      place: "اطفال",
      condition: "تم الالغاء",
    },
    {
      name: "امر التشغيل 1",
      place: "عمليات",
      condition:  "قيد الانتظار",
    },
    {
      name: "امر التشغيل 2",
      place: "جراحة",
      condition: "انتهاء",
    },
    {
      name: "امر التشغيل 3",
      place: "اطفال",
      condition: "تم الالغاء",
    },
    {
      name: "امر التشغيل 1",
      place: "عمليات",
      condition: "قيد الانتظار",
    },
    {
      name: "امر التشغيل 2",
      place: "جراحة",
      condition: "انتهاء",
    },
    {
      name: "امر التشغيل 3",
      place: "اطفال",
      condition: "تم الالغاء",
    },
  ];
  return (
    <div className="xl:flex gap-6 items-center p-6 bg-white rounded-lg mb-6 mx-2 lg:mx-6">
      <div className="grow flex flex-col items-between">
        <div className="flex md:justify-start md:flex-row gap-16 mb-12 pl-6">
          <div className="flex flex-row-reverse items-center gap-2">
            <HalfCircle values={{ name: "Hello", precent: 90 }}></HalfCircle>
            <div className="text-right">
              <p className="mb-1">المستهدف: 100</p>
              <p className="mb-1">الفعلي: 95</p>
              <p>التباين: %5</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center gap-2">
            <HalfCircle values={{ name: "Hello", precent: 90 }}></HalfCircle>
            <div className="text-right">
              <p className="mb-1">المستهدف: 100</p>
              <p className="mb-1">الفعلي: 95</p>
              <p>التباين: %5</p>
            </div>
          </div>
        </div>
        <SalesChart />
      </div>
      <div className="xl:border-l ml-6 pl-6">
        <h4 className="text-right text-[#05004E] font-bold text-2xl my-6">اوامر التشغيل</h4>
        <div>
          {list.map((info, index) => {
            return (
              <div className="flex flex-row-reverse items-center gap-12 mb-4" key={index}>
                <div className="flex flex-row-reverse xl:flex-col text-right gap-1 lg:gap-1 basis-1/2">
                  <p className="text-xl xl:text-base font-semibold text-nowrap">{info.name}</p>
                  <p className="text-xl xl:text-base font-semibold">{info.place}</p>
                </div>
                <div className="basis-1/2">
                  <p className={`text-xl xl:text-lg text-nowrap font-semibold text-right p-2 ml-auto rounded-lg w-fit ${info.condition == "انتهاء" ? "bg-[#07E0987A]" : info.condition == "قيد الانتظار" ? "bg-[#0095FF4A]" : "bg-[#FE2835]"}`}>{info.condition}</p>
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
