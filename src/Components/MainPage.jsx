import Header from "./Header";
import Assets from "./Assets";
import OperationCommands from "./OperationCommands";
import SideMenu from "./SideMenu";

function MainPage() {
  return (
    <div className="flex flex-row-reverse">
      <SideMenu />
      <div className="grow bg-[#F8F9FA]">
        <Header />
        <Assets />
        <OperationCommands />
      </div>
    </div>
  );
}

export default MainPage;
