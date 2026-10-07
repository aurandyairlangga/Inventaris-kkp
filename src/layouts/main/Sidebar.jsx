import {
  ArrowLeftRight,
  Bolt,
  Box,
  Boxes,
  KeyRound,
  MessageCircleQuestionMark,
  Wrench,
} from "lucide-react";
import Menu from "./Menu";




const Sidebar = () => {
  return (
    <div className="h-full bg-[#111111] p-6 w-80 justify-center">
      <div className="flex items-center gap-2 text-2xl mb-16">
        <Bolt className="text-[#DC143C]"/>
        <h1 className="font-semibold text-[#DC143C]">Dashboard</h1>
      </div>

      <div className="flex flex-col gap-8 text-[#9197B3] cursor-pointer">
        {/* Nanti ini kita looping */}
        <Menu to="/" title="Dashboard" icon={<KeyRound />} />
        <Menu to="/product" title="Product" icon={<Box />} />
        <Menu to="/dataAsset" title="Data Asset " icon={<Boxes />} />
        <Menu to="/borrowing" title="Borrowing" icon={<ArrowLeftRight />} />
        <Menu to="/maintenance" title="Maintenance" icon={<Wrench/>}/>
        <Menu to="/help" title="Help" icon={<MessageCircleQuestionMark/>}/>
      </div>
    </div>
  );
};

export default Sidebar;
