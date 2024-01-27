import { useEffect, useState } from "react";
import Header from "./Header";
import { Pagination, Table } from "antd";
import { getOperationCommands, getData } from "../Services/APICalls";
import { useStoreContext } from "../Context/storeContext";
import { useTranslation } from "react-i18next";

function OperationCommandsPage() {
  const { t } = useTranslation();
  const [list2, setList2] = useState();
  const { userData } = useStoreContext();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [limit, setLimit] = useState(5);
  useEffect(() => {
    const fetchData = async () => {
      let temp = await getData(`/devices/institution/${userData.currentInstitutions._id}?page=${page}&limit=${limit}`);
      setPageSize(temp.data.data.pages * 10);
      console.log(temp);
      let temp2 = temp.data.data.devices.map((item) => { 
        return { id: item.IDCode, place: item.location, type: item.modelType, description: item.description, notes: item.notes };
      });
      console.log(temp2);
      setList2(temp2);
    };
    fetchData();
  }, [page, limit]);

  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white lg:m-6 p-6 rounded-lg">
        <h2 className="text-right text-[#05004E] font-bold text-2xl mb-12">{t("devices")}</h2>
        <Table dataSource={list2} pagination={false}>
          <Table.Column
            title={t("edit_or_delete")}
            dataIndex="action"
            key="action"
            render={() => (
              <div className="flex justify-center gap-2">
                <button>
                  <i className="fa-solid fa-pen bg-[#0EB70B] text-white p-2 rounded-lg"></i>
                </button>
                <button>
                  <i className="fa-solid fa-trash bg-[#CC0F1F] text-white p-2 rounded-lg"></i>
                </button>
              </div>
            )}
          />
          <Table.Column title={t("notes")} dataIndex="notes" key="notes" />
          <Table.Column title={t("image")} dataIndex="image" key="image" />
          <Table.Column title={t("description")} dataIndex="description" key="description" />
          <Table.Column title={t("type")} dataIndex="type" key="type" />
          <Table.Column title={t("location")} dataIndex="place" key="action" />
          <Table.Column title="ID (Code)" dataIndex="id" key="id" />
        </Table>
        <div className="flex justify-center mt-12">
          <Pagination defaultCurrent={1} showSizeChanger onShowSizeChange={(e, value) => setLimit(value)} total={pageSize} onChange={(e) => setPage(e)} />
        </div>
      </div>
    </div>
  );
}

export default OperationCommandsPage;
