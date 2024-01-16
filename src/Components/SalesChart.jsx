import { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function SalesChart() {
  const [select, setSelect] = useState(false);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Sales",
        data: [3, 6, 9, 12, 20, 15],
        backgroundColor: "#fdc475",
        borderColor: "#fdc475",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // Use 'category' instead of 'CategoryScale'
        title: {
          display: true,
          text: "ايام الشهر",
        },
      },
      y: {
        title: {
          display: true,
          text: "اوامر التشغيل",
        },
      },
    },
  };

  const toggleSelect = () => {
    setSelect(!select);
  };

  return (
    <div>
      <div className="flex flex-row-reverse mb-6 items-center justify-between">
        <h3 className="text-right text-[#05004E] font-semibold text-2xl">عدد اوامر التشغيل خلال الشهر</h3>
        <button className="relative flex justify-center items-center bg-white border focus:outline-none shadow text-grey-600 rounded-lg ">
          <p className="px-4 py-3" onClick={toggleSelect}>
            شهري
          </p>
          <span className="border-l p-2" onClick={toggleSelect}>
            <i className="fa-solid fa-angle-down"></i>
          </span>
          <div className={`absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded-lg z-[2] ${select ? "block" : "hidden"}`}>
            <ul className="text-right border rounded-lg">
              <li className="px-4 py-3 hover:bg-gray-100 border-b">شهري</li>
            </ul>
          </div>
        </button>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default SalesChart;
