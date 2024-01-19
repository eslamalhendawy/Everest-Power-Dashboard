
import Header from "./Header";

function OperationCommandsPage() {
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
      description: "يحتاج صيانة",
    },
    {
      id: "8148d57d",
      place: "جراحة",
      condition: "معطل",
      date: "20/1/2012",
      description: "يحتاج صيانة",
    },
    {
      id: "d7444b86",
      place: "استقبال",
      condition: "نصف الكفائة",
      date: "20/1/2012",
      description: "يحتاج صيانة",
    },
    {
      id: "bc8d2dc0",
      place: "عمليات",
      condition: "ممتاز",
      date: "20/1/2012",
      description: "لا يوجد,"
    },
    {
      id: "7aad460b",
      place: "عمليات",
      condition: "معطل",
      date: "20/1/2012",
      description: "يحتاج صيانة",
    },
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
      description: "يحتاج صيانة",
    },
    {
      id: "8148d57d",
      place: "جراحة",
      condition: "معطل",
      date: "20/1/2012",
      description: "يحتاج صيانة",
    },
    {
      id: "d7444b86",
      place: "استقبال",
      condition: "نصف الكفائة",
      date: "20/1/2012",
      description: "يحتاج صيانة",
    },
    {
      id: "bc8d2dc0",
      place: "عمليات",
      condition: "ممتاز",
      date: "20/1/2012",
      description: "لا يوجد,"
    },
    {
      id: "7aad460b",
      place: "عمليات",
      condition: "معطل",
      date: "20/1/2012",
      description: "يحتاج صيانة",
    },
  ];

  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white m-2 lg:m-6 p-6 rounded-lg">
        <div className="flex flex-row-reverse gap-2 w-[300px] items-center ml-auto bg-[#ECECEC] py-3 px-3 rounded-xl mb-12">
          <i className="fa-solid fa-magnifying-glass text-[#3268FF]"></i>
          <input type="text" className="bg-[#ECECEC] w-full focus:outline-none text-right text-[#3268FF]" placeholder="...البحث هنا" />
        </div>
        <h2 className="text-right text-[#05004E] font-bold text-2xl mb-12">اوامر التشغيل</h2>
        <div className="flex flex-row-reverse gap-12 w-full justify-between items-center p-2 border-b border-[#CACACABF]">
          <p className="font-bold text-sm xl:text-lg text-right basis-1/6">ID (Code)</p>
          <p className="font-bold text-sm xl:text-lg text-nowrap text-right basis-1/6">المكان في المستشفى</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/6">الحالة</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/6">تاريخ البدأ</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/6">وصف المشكلة</p>
          <p className="font-bold text-sm xl:text-lg text-right basis-1/6">الحذف او التعديل</p>
        </div>
        <div className="overflow-x-scroll" >
          {list.map((item, index) => {
            return (
              <div key={index} className="flex flex-row-reverse gap-12 w-full justify-between items-center px-2 py-8 border-b border-[#CACACABF]">
                <p className="text-sm lg:text-base font-semibold text-right basis-1/6">{item.id}</p>
                <p className="text-sm lg:text-base font-semibold text-right basis-1/6">{item.place}</p>
                <p className="text-sm lg:text-base font-semibold text-right basis-1/6">{item.condition}</p>
                <p className="text-sm lg:text-base font-semibold text-right basis-1/6">{item.date}</p>
                <p className="text-sm lg:text-base font-semibold text-right basis-1/6">{item.description}</p>
                <div className="flex flex-row-reverse gap-2 xl:gap-6 text-lg items-center text-center basis-1/6">
                  <i className="fa-solid fa-trash p-2 lg:p-3 bg-[#CC0F1F] text-white rounded-lg cursor-pointer"></i>
                  <i className="fa-solid fa-pen p-2 lg:p-3 bg-[#0EB70B] text-white rounded-lg cursor-pointer"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OperationCommandsPage;
