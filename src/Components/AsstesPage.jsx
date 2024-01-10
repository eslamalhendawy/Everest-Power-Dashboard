import React from "react";
import Header from "./Header";

function OperationCommandsPage() {
  const list = [
    {
      id: "7aad460b",
      place: "عمليات",
      condition: "معطل",
      description: "يحتاج صيانة",
      type: "اشعة"
    },
    {
      id: "9c7ce401",
      place: "اطفال",
      condition: "معطل",
      description: "اي حاااااجة",
      type: "تحاليل"
    },
    {
      id: "8148d57d",
      place: "جراحة",
      condition: "معطل",
      description: "صلحني يا غالي",
      type: "جراحة"
    },
    {
      id: "d7444b86",
      place: "استقبال",
      condition: "نص نص",
      description: "يحتاج صيانة",
      type: "تصوير مقطعي"
    },
    {
      id: "bc8d2dc0",
      place: "عمليات",
      condition: "مية مية",
      description: "زي الفل",
      type: "تحاليل"
    },
    {
      id: "7aad460b",
      place: "عمليات",
      condition: "معطل",
      description: "يحتاج صيانة",
      type: "جراحة"
    },
    {
      id: "9c7ce401",
      place: "اطفال",
      condition: "معطل",
      description: "اي حاااااجة",
      type: "اشعة"
    },
    {
      id: "8148d57d",
      place: "جراحة",
      condition: "معطل",
      description: "صلحني يا غالي",
      type: "اشعة"
    },
    {
      id: "d7444b86",
      place: "استقبال",
      condition: "نص نص",
      description: "يحتاج صيانة",
      type: "تصوير مقطعي"
    },
    {
      id: "bc8d2dc0",
      place: "عمليات",
      condition: "مية مية",
      description: "زي الفل",
      type: "جراحة"
    },
  ];

  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white lg:m-6 p-6 rounded-lg">
        <div className="flex flex-row-reverse gap-2 w-[300px] items-center ml-auto bg-[#ECECEC] py-3 px-3 rounded-xl mb-12">
          <i className="fa-solid fa-magnifying-glass text-[#3268FF]"></i>
          <input type="text" className="bg-[#ECECEC] w-full focus:outline-none text-right text-[#3268FF]" placeholder="...البحث هنا" />
        </div>
        <h2 className="text-right text-[#05004E] font-bold text-2xl mb-12">الاصول</h2>
        <div className="flex flex-row-reverse gap-12 w-full justify-between items-center p-2 border-b border-[#CACACABF]">
          <p className="font-bold text-sm xl:text-lg text-right basis-1/7">ID (Code)</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/7">المكان في المستشفى</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/7">نوع الجهاز</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/7">وصف</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/7">صورة الاصل</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/7">معلومات اضافية</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/7">الحذف او التعديل</p>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="flex flex-row-reverse gap-12 w-full justify-between items-center px-2 py-8 border-b border-[#CACACABF]">
              <p className="text-sm lg:text-base font-semibold text-right basis-1/7">{item.id}</p>
              <p className="text-sm lg:text-base font-semibold text-right basis-1/7">{item.place}</p>
              <p className="text-sm lg:text-base font-semibold text-right basis-1/7">{item.type}</p>
              <p className="text-sm lg:text-base font-semibold text-right basis-1/7">{item.description}</p>
              <p className="text-sm lg:text-base font-semibold text-right basis-1/7">{item.description}</p>
              <p className="text-sm lg:text-base font-semibold text-right basis-1/7">{item.description}</p>
              <div className="flex flex-row-reverse gap-2 xl:gap-6 text-lg items-center text-center basis-1/7">
                <i className="fa-solid fa-trash p-2 lg:p-3 bg-[#CC0F1F] text-white rounded-lg cursor-pointer"></i>
                <i className="fa-solid fa-pen p-2 lg:p-3 bg-[#0EB70B] text-white rounded-lg cursor-pointer"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OperationCommandsPage;
