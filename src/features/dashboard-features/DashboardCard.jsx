import cn from "@/utils/cn";

const DashboardCard = ({ children = "", className = "" }) => {
  return (
    <div
      className={cn(
        "bg-[#FFFFFF] rounded-2xl shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
