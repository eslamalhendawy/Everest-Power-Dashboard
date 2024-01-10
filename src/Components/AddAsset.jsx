import Header from "./Header";

function AddOperation() {
  const governates = [
    {
      id: 0,
      governorate: "المحافظة",
    },
    {
      id: 1,
      governorate: "القاهرة",
    },
    {
      id: 2,
      governorate: "اسوان",
    },
    {
      id: 3,
      governorate: "اسيوط",
    },
    {
      id: 4,
      governorate: "الاسكندرية",
    },
    {
      id: 5,
      governorate: "الاسماعلية",
    },
    {
      id: 6,
      governorate: "الاقصر",
    },
    {
      id: 7,
      governorate: "البحر الاحمر",
    },
    {
      id: 8,
      governorate: "البحيرة",
    },
    {
      id: 9,
      governorate: "الجيزة",
    },
    {
      id: 10,
      governorate: "الدقهلية",
    },
    {
      id: 11,
      governorate: "السويس",
    },
    {
      id: 12,
      governorate: "الشرقية",
    },
    {
      id: 13,
      governorate: "الغربية",
    },
    {
      id: 14,
      governorate: "الفيوم",
    },
    {
      id: 15,
      governorate: "القليوبية",
    },
    {
      id: 16,
      governorate: "المنوفية",
    },
    {
      id: 17,
      governorate: "المنيا",
    },
    {
      id: 18,
      governorate: "الوادي الجديد",
    },
    {
      id: 19,
      governorate: "بني سويف",
    },
    {
      id: 20,
      governorate: "بورسعيد",
    },
    {
      id: 21,
      governorate: "جنوب سيناء",
    },
    {
      id: 22,
      governorate: "حلوان",
    },
    {
      id: 23,
      governorate: "دمياط",
    },
    {
      id: 24,
      governorate: "سوهاج",
    },
    {
      id: 25,
      governorate: "شمال سيناء",
    },
    {
      id: 26,
      governorate: "قنا",
    },
    {
      id: 27,
      governorate: "كفر الشيخ",
    },
    {
      id: 28,
      governorate: "مطروح",
    },
    {
      id: 29,
      governorate: "السادس من اكتوبر",
    },
  ];

  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white m-6 p-6 rounded-lg">
        <div className="flex flex-row-reverse gap-2 items-center mb-6 pb-6 border-b-2">
          <i className="fa-solid fa-box text-2xl text-[#05004E]"></i>
          <h2 className="text-right text-[#05004E] font-bold text-2xl ">اضافة اصل</h2>
        </div>
        <div className="flex flex-row-reverse gap-12 mb-6">
          <div className="basis-1/4">
            <p className="text-right text-lg font-semibold mb-4">ID (Code)</p>
            <input className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="text" />
          </div>
          <div className="basis-2/4">
            <p className="text-right text-lg font-semibold mb-4">المكان في المستشفى</p>
            <input className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="text" />
          </div>
          <div className="basis-1/4">
            <p className="text-right text-lg font-semibold mb-4">نوع الجهاز</p>
            <input className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="text" />
          </div>
        </div>
        <div className="flex flex-row-reverse gap-20">
          <div className="basis-1/2">
          <div className="flex flex-row-reverse gap-6 mb-6">
              <div className="grow">
                <p className="text-right text-lg font-semibold mb-4">معلومات اضافية</p>
                <input className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="text" />
              </div>
            </div>
            <div className="flex flex-row-reverse gap-6 mb-6">
              <div className="grow">
                <p className="text-right text-lg font-semibold mb-4">صورة ان وجدت</p>
                <input className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="file" />
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">الوصف</p>
            <textarea className="focus:outline-none border w-[85%] h-[80%] block ml-auto resize-none border-black p-3 rounded-lg text-right" name="" id=""></textarea>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-12 mb-6">
          <button className="border-[2px] text-white hover:text-white bg-[#2B80FF] hover:bg-[#1C48C2]  duration-300 border-[#2B80FF] hover:border-[#1C48C2] py-2 px-12 group rounded-lg">اضافة</button>
          <button className="border-[2px] text-[#FF5656] hover:text-white hover:bg-[#FF5656] duration-300 border-[#FF5656] py-2 px-12 group rounded-lg">حذف</button>
        </div>
      </div>
    </div>
  );
}

export default AddOperation;
