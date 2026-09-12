import { Users } from "lucide-react";

const Card = ({
  icon: Icon,
  iconColor,
  title,
  jumlah,
  presentaseColor,
  presentase,
  status,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
        <Icon className={iconColor} />
      </div>

      <div>
        <p className="text-[#ACACAC]">{title}</p>
        <p className="text-2xl font-semibold text-[#333333]">{jumlah}</p>
        <div className="flex gap-1">
          <p className="text-xs text-[#00AC4F] flex items-center gap-1 mt-0.5">
            {presentase}
          </p>
          <p className="text-xs flex items-center gap-1 mt-0.5">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
