import Header from "./Header";
import Assets from "./Assets";
import OperationCommands from "./OperationCommands";

function MainPage() {
  return (
    <div className='grow bg-[#F8F9FA]'>
      <Header />
      <Assets />
      <OperationCommands />
    </div>
  )
}

export default MainPage