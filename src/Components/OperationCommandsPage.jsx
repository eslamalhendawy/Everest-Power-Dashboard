import { useEffect } from "react";
import Header from "./Header";
import { Pagination, Table } from "antd";
import { getData } from "../Services/APICalls";
import { useState } from "react";
import { useStoreContext } from "../Context/storeContext";
import { styled } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

export const HtmlTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

function OperationCommandsPage() {
  const { t } = useTranslation();
  const [list, setList] = useState();
  const { userData } = useStoreContext();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      let temp = await getData(`/orders/institution/${userData.currentInstitutions._id}?page=${page}&limit=${limit}`, localStorage.getItem("userToken"));
      setPageSize(temp.data.data.pages * 10);
      let temp2 = temp.data.data.orders.map((item) => {
        const date = new Date(item.startedAt);
        if (item.finishedAt == null) {
          item.finishedAt = "لا يوجد";
        } else {
          const date2 = new Date(item.finishedAt);
          item.finishedAt = `${date2.getDate()}-${date2.getMonth() + 1}-${date2.getFullYear()}`;
        }
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return {
          id: item.IDCode,
          place: item.location,
          state: item.status,
          description: item.description,
          endDate: item.finishedAt,
          devices: item.devices.map((item) => item.IDCode).join(" - "),
          startDate: `${day}-${month}-${year}`,
        };
      });
      setList(temp2);
    };
    fetchData();
  }, [page, limit]);

  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white m-2 lg:m-6 p-6 rounded-lg">
        <h2 className="text-right text-[#05004E] font-bold text-2xl mb-12">{t("operations")}</h2>
        <Table dataSource={list}  pagination={false} >
          <Table.Column
            title={t("edit_or_delete_or_maintenance")}
            dataIndex="action"
            key="action"
            render={() => (
              <div className="flex justify-center gap-2">
                <button>
                  <i className="fa-solid fa-gear bg-[#1C48C2] text-white p-2 rounded-lg"></i>
                </button>
                <button>
                  <i className="fa-solid fa-pen bg-[#0EB70B] text-white p-2 rounded-lg"></i>
                </button>
                <button>
                  <i className="fa-solid fa-trash bg-[#CC0F1F] text-white p-2 rounded-lg"></i>
                </button>
              </div>
            )}
          />
          <Table.Column title={t("description")} dataIndex="description" key="description" />
          <Table.Column title={t("end_date")} dataIndex="endDate" key="endDate" />
          <Table.Column title={t("start_date")} dataIndex="startDate" key="startDate" />
          <Table.Column title={t("status")} dataIndex="state" key="state" />
          <Table.Column title={t("location")} dataIndex="place" key="action" />
          <Table.Column title={t("devices")} dataIndex="devices" key="devices" />
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
