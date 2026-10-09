import cn from "@/utils/cn";

const Card = ({ children = "", className = "" }) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white border-gray-200 p-4 text-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
