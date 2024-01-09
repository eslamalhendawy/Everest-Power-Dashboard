import React from "react";

function OperationCommands() {
  const list = [
    {
      id: "7aad460b",
      place: "عمليات",
      condition: "معطل",
      date: "20/1/2012",
      description: "يحتاج صيانة",
    },
    {
      id: "9c7ce401",
      place: "اطفال",
      condition: "معطل",
      date: "20/1/2012",
      description: "اي حاااااجة",
    },
    {
      id: "8148d57d",
      place: "جراحة",
      condition: "معطل",
      date: "20/1/2012",
      description: "صلحني يا غالي",
    },
    {
      id: "d7444b86",
      place: "استقبال",
      condition: "نص نص",
      date: "20/1/2012",
      description: "يحتاج صيانة",
    },
    {
      id: "bc8d2dc0",
      place: "عمليات",
      condition: "مية مية",
      date: "20/1/2012",
      description: "زي الفل",
    },
  ];
  return (
    <div className="p-6 bg-white rounded-lg mb-6 mx-6">
      <h2 className="text-right text-[#05004E] font-bold text-2xl mb-6">اوامر التشغيل</h2>
      <div className="flex flex-row-reverse gap-12 w-full justify-between p-2 border-b border-[#CACACABF]">
        <p className="font-bold text-lg text-right basis-1/5">ID (Code)</p>
        <p className="font-bold text-lg text-right basis-1/5">المكان في المستشفى</p>
        <p className="font-bold text-lg text-right basis-1/5">الحالة</p>
        <p className="font-bold text-lg text-right basis-1/5">تاريخ البدأ</p>
        <p className="font-bold text-lg text-right basis-1/5">وصف المشكلة</p>
      </div>
      {list.map((item, index) => {
        return (
          <div key={index} className="flex flex-row-reverse gap-12 w-full justify-between px-2 py-8 border-b border-[#CACACABF]">
            <p className="text-sm lg:text-base font-semibold text-right basis-1/5">{item.id}</p>
            <p className="text-sm lg:text-base font-semibold text-right basis-1/5">{item.place}</p>
            <p className="text-sm lg:text-base font-semibold text-right basis-1/5">{item.condition}</p>
            <p className="text-sm lg:text-base font-semibold text-right basis-1/5">{item.date}</p>
            <p className="text-sm lg:text-base font-semibold text-right basis-1/5">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default OperationCommands;
