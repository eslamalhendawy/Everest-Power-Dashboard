import { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { Table } from "antd";

const columns = [
  {
    title: "الحذف او التعديل",
    key: "action",
    render: () => (
      <div className="flex justify-center gap-2">
        <button>
          <i className="fa-solid fa-pen bg-[#0EB70B] text-white p-2 rounded-lg"></i>
        </button>
        <button>
          <i className="fa-solid fa-trash bg-[#CC0F1F] text-white p-2 rounded-lg"></i>
        </button>
      </div>
    ),
  },
  {title: "الوصف", dataIndex: "description", key: "description"},
  { title: "تاريخ الانتهاء", dataIndex: "endDate", key: "endDate" },
  { title: "تاريخ البدأ", dataIndex: "startDate", key: "startDate" },
  { title: "الحالة", dataIndex: "state", key: "state" },
  { title: "المكان في المستشفى", dataIndex: "place", key: "place" },
  {title: "الاصول", dataIndex: "devices", key: "devices"},
  { title: "ID (Code)", dataIndex: "id", key: "id" },
];

const data = [
  {id: "adad5as4d54a", place: "عمليات", state: "معطل",},
  { name: "احمد فريد", email: "ahmedfaried@gmail.com", role: "Admin", institutes: "رأس سدر" },
  { name: "احمد فريد", email: "ahmedfaried@gmail.com", role: "Admin", institutes: "رأس سدر" },
];

function OperationCommandsPage() {
  const url = "https://erpsystem.pildextech.cf/";

  useEffect(() => {
    const fetchData = async () => {

    }
  })


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
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
}

export default OperationCommandsPage;
