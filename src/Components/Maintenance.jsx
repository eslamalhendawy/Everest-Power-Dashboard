import Header from "./Header";
import { useTranslation } from "react-i18next";
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
  { title: "المؤسسات", dataIndex: "institutions", key: "institutions" },
  { title: "الصلاحية", dataIndex: "role", key: "role" },
  { title: "البريد الالكتروني", dataIndex: "email", key: "email" },
  { title: "الاسم", dataIndex: "name", key: "age" },
];

function Maintenance() {
  const { t } = useTranslation();
  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white m-2 lg:m-6 p-6 rounded-lg">
        <div className="flex flex-row-reverse gap-2 items-center mb-6 pb-6 border-b-2">
          <i className="fa-solid fa-box text-2xl text-[#05004E]"></i>
          <h2 className="text-right text-[#05004E] font-bold text-2xl ">{t("preventive_maintenance")}</h2>
        </div>
        <Table>
          <Table.Column title={t("fourth_week")} dataIndex="institutions" key="institutions" />
          <Table.Column title={t("third_week")} dataIndex="institutions" key="institutions" />
          <Table.Column title={t("second_week")} dataIndex="institutions" key="institutions" />
          <Table.Column title={t("first_week")} dataIndex="institutions" key="institutions" />
          <Table.Column title={t("location")} dataIndex="role" key="role" />
          <Table.Column title={t("device")} dataIndex="email" key="email" />
          <Table.Column title={t("code")} dataIndex="name" key="name" />
        </Table>
      </div>
    </div>
  );
}

export default Maintenance;
