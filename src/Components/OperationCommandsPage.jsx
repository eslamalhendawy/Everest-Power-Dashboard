import { useEffect, useState } from "react";
import Header from "./Header";
import { Table } from "antd";
import { getOperationCommands } from "../Services/APICalls";

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
  { title: "الحالة", dataIndex: "place", key: "state" },
  { title: "المكان في المستشفى", dataIndex: "place", key: "place" },
  {title: "الاصول", dataIndex: "devices", key: "devices"},
  { title: "ID (Code)", dataIndex: "id", key: "id" },
];

const data = [
  {id: "adad5as4d54a", place: "عمليات", state: "معطل",},
];

function OperationCommandsPage() {
  const [list, setList] = useState();

  useEffect(() => {
    let instituteID = localStorage.getItem("instituteID");
    console.log(instituteID);
    const fetchData = async () => {
      let temp = await getOperationCommands(instituteID);
      console.log(temp.data.data);
      let temp2 = temp.data.data.map((item) => {
        return {id: item._id, devices: item.modelType, place: item.location, state: item.description, startDate: item.createdAt}
        // console.log(item);
      })
      setList(temp2);
    }
    fetchData();
  }, [])


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
