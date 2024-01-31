import Header from "./Header";
import { useTranslation } from "react-i18next";
import { useStoreContext } from "../Context/storeContext";
import { Table } from "antd";
function AddInstitute() {
  const { userData } = useStoreContext();
  const { t } = useTranslation();

  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white m-6 p-6 rounded-lg">
        <div className="flex justify-between items-center border-b-2">
          <button className="border-[2px] text-white hover:text-white bg-[#2B80FF] hover:bg-[#1C48C2]  duration-300 border-[#2B80FF] hover:border-[#1C48C2] py-2 px-6 group rounded-lg">{t("add_institution")}</button>
          <div className="flex flex-row-reverse gap-2 items-center mb-6 pb-6 ">
            <i className="fa-solid fa-box text-2xl text-[#05004E]"></i>
            <h2 className="text-right text-[#05004E] font-bold text-2xl ">{t("institutions")}</h2>
          </div>
        </div>
        <Table >
            <Table.Column
              title={t("edit_or_delete")}
              dataIndex="action"
              key="action"
              render={(_, record) => (
                <div className="flex justify-center gap-2">
                  <button className="focus:outline-none">
                    <i className="fa-solid fa-pen bg-[#0EB70B] text-white p-2 rounded-lg "></i>
                  </button>
                  <button className="focus:outline-none">
                    <i className="fa-solid fa-trash bg-[#CC0F1F] text-white p-2 rounded-lg"></i>
                  </button>
                </div>
              )}
            />
            <Table.Column title={t("phone_number")} dataIndex="role" key="role" />
            <Table.Column title={t("address")} dataIndex="email" key="email" />
            <Table.Column title={t("name")} dataIndex="name" key="name" />
          </Table>
      </div>
    </div>
  );
}

export default AddInstitute;
