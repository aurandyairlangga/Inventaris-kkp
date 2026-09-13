import {
  Bolt,
  Box,
  KeyRound,
  LayerArrowUp,
  MessageCircleQuestionMark,
  Wallet,
} from "lucide-react";

import Menu from "../Menu";


// side bard kasih width tambahin
// kontent body kasih padding
// Font size sidebar coba dikecilin dikit


const Sidebar = () => {
  return (
    <div className="h-full bg-[#FFFFFF] p-6 w-80 justify-center">
      <div className="flex items-center gap-2 text-2xl mb-16">
        <Bolt/>
        <h1 className="font-semibold">Dashboard</h1>
      </div>

      <div className="flex flex-col gap-8 text-[#9197B3] cursor-pointer">
        {/* Nanti ini kita looping */}
        <Menu to="/" title="Dashboard" icon={<KeyRound />} />
        <Menu to="/produk" title="Produk" icon={<Box />} />
        <Menu to="/income" title="Income" icon={<Wallet />} />
        <Menu to="/customers" title="Customers" icon={<Wallet />} />
        <Menu to="/promote" title="Promote" icon={<LayerArrowUp/>}/>
        <Menu to="/help" title="Help" icon={<MessageCircleQuestionMark/>}/>
      </div>
    </div>
  );
};

export default Sidebar;
