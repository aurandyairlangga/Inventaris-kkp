import { Monitor, UserRoundCheck, Users } from "lucide-react";
import DashboardCard from "./DashboardCard";
import cn from "@/utils/cn";

const stats = [
  {
    icon: <Users className="text-[#00AC4F]" />,
    title: "Total customers",
    total: "5,423",
    presentaseColor: "text-[#00AC4F]",
    presentase: "16%",
    status: "this month",
  },
  {
    icon: <UserRoundCheck className="text-[#00AC4F]" />,
    title: "Members",
    total: "1,893",
    presentaseColor: "text-[#D0004B]",
    presentase: "1%",
    status: "this month",
  },
  {
    icon: <Monitor className="text-[#00AC4F]" />,
    title: "Active Now",
    total: "189",
    status: "Users",
  },
];
const StatsCards = () => {
  return (
    <DashboardCard className="pl-5 pt-7 pb-7 pr-28 ml-0.5 mt-6 flex flex-col sm:flex-row items-center gap-28 sm:gap-12 justify-between">
      {stats.map(
        ({ icon, title, total, presentaseColor, presentase, status }) => {
          return (
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                {icon}
              </div>

              <div>
                <p className="text-[#ACACAC]">{title}</p>
                <p className="text-2xl font-semibold text-[#333333]">{total}</p>
                <div className="flex gap-1">
                  <p
                    className={cn(
                      "text-xs text-[#00AC4F] flex items-center gap-1 mt-0.5",
                      presentaseColor,
                    )}
                  >
                    {presentase}
                  </p>
                  <p className="text-xs flex items-center gap-1 mt-0.5">
                    {status}
                  </p>
                </div>
              </div>
            </div>
          );
        },
      )}
    </DashboardCard>
  );
};

export default StatsCards;
