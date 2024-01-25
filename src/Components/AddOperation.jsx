import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { addOperation } from "../Services/APICalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddOperation() {
  const token = localStorage.getItem("userToken");
  const [IDCode, setIDCode] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const institutions = localStorage.getItem("instituteID");
  const [devices, setDevices] = useState("");

  const options = [
    { value: "option1", label: "المؤسسة 1" },
    { value: "option2", label: "المؤسسة 2" },
    { value: "option3", label: "المؤسسة 3" },
  ];

  const handleChange = (selectedOptions) => {
    console.log("Selected Options:", selectedOptions);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid black",
      borderRadius: "8px",
      padding: "6px",
      boxShadow: state.isFocused ? "0 0 0 2px #2868c7" : null,
      outline: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#2868c7" : null,
      color: state.isSelected ? "#fff" : null,
    }),
  };

  const sendData = async () => {
    if(IDCode === ""){
      toast.error("ادخل رمز امر التشغيل");
      return;
    }
    if(location === ""){
      toast.error("ادخل المكان في المنشأة");
      return;
    }
    if(startedAt === ""){
      toast.error("ادخل تاريخ البدأ");
      return;
    }
    if(devices === ""){
      toast.error("ادخل الاصل");
      return;
    }
    if(status === "") {
      toast.error("ادخل حالة الامر");
      return;
    }
    if(description === ""){
      toast.error("ادخل الوصف");
      return;
    }
    await addOperation(token, {institutions, description, status, devices, location, startedAt, IDCode})
  }

  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white m-6 p-6 rounded-lg">
        <div className="flex flex-row-reverse gap-2 items-center mb-6 pb-6 border-b-2">
          <i className="fa-solid fa-box text-2xl text-[#05004E]"></i>
          <h2 className="text-right text-[#05004E] font-bold text-2xl ">اضافة امر تشغيل</h2>
        </div>
        <div className="flex flex-col gap-6 md:flex-row-reverse mb-6">
          <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">ID (Code)</p>
            <input onChange={(e) => setIDCode(e.target.value)} className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="text" />
          </div>
          <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">المكان في المنشأة</p>
            <input onChange={(e) => setLocation(e.target.value)} className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="text" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row-reverse mb-6">
          <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">تاريخ البدأ</p>
            <input onChange={(e) => setStartedAt(e.target.value)} className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="date" />
          </div>
          <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">تاريخ الانتهاء</p>
            <input className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="date" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row-reverse mb-6">
          <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">الاصل</p>
            <input onChange={(e) => setDevices(e.target.value)} className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="text" />
          </div>
          <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">الحالة</p>
            <input onChange={(e) => setStatus(e.target.value)} className="focus:outline-none border w-full border-black p-3 rounded-lg text-right" type="text" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:items-center md:flex-row-reverse mb-6">
          <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">الوصف</p>
            <textarea onChange={(e) => setDescription(e.target.value)} className="focus:outline-none border w-[98%] h-full block ml-auto border-black p-3 rounded-lg text-right" name="" id=""></textarea>
          </div>
          {/* <div className="basis-1/2">
            <p className="text-right text-lg font-semibold mb-4">المؤسسة</p>
            <Select styles={customStyles} options={options} onChange={handleChange} placeholder="Select multiple options" />
          </div> */}
        </div>
        <div className="flex flex-row-reverse gap-12 mb-6">
          <button onClick={sendData} className="border-[2px] text-white hover:text-white bg-[#2B80FF] hover:bg-[#1C48C2]  duration-300 border-[#2B80FF] hover:border-[#1C48C2] py-2 px-12 group rounded-lg">اضافة</button>
          <Link to="/operations" className="border-[2px] text-[#FF5656] hover:text-white hover:bg-[#FF5656] duration-300 border-[#FF5656] py-2 px-12 group rounded-lg">الغاء</Link>
        </div>
      </div>
    </div>
  );
}

export default AddOperation;
