import { Monitor, UserRoundCheck, Users } from "lucide-react";
import Card from "../../components/Card";

const Cards = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl shadow-sm pl-5 pt-7 pb-7 pr-28 ml-0.5 mt-6 flex flex-col sm:flex-row items-center gap-28 sm:gap-12 justify-between">
      <Card
        icon={Users}
        iconColor="text-[#00AC4F]"
        title="Total customers"
        jumlah="5,423"
        presentaseColor="text-[#D0004B]"
        presentase="16%"
        status="this month"
      />
      <Card
        icon={UserRoundCheck}
        iconColor="text-[#00AC4F]"
        title="Members"
        jumlah="1,893"
        presentaseColor="text-[#D0004B]"
        presentase="1%"
        status="this month"
      />
      <Card
        icon={Monitor}
        iconColor="text-[#00AC4F]"
        title="Active Now"
        jumlah="189"
        status="Users"
      />
      
   
    </div>
  );
};

export default Cards;
