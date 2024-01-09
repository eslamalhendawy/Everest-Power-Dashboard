import Header from "./Header";

function AddOperation() {
  return (
    <div className="grow bg-[#F8F9FA]">
      <Header />
      <div className="bg-white m-6 p-6 rounded-lg">
        <div className="flex flex-row-reverse items-center gap-3 mb-6 pb-6 border-b-2">
          <i className="fa-solid fa-box text-2xl text-[#05004E]"></i>
          <h2 className="text-right text-[#05004E] font-bold text-2xl ">اضافة امر تشغيل</h2>
        </div>
      </div>
    </div>
  );
}

export default AddOperation;
