import cn from "@/utils/cn";

const Button = ({
  children = null,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) => {
  const buttonVariant = {
    primary:
      "bg-indigo-600 text-white border border-indigo-800 shadow-[0_4px_10px_rgba(79,70,229,0.35),inset_0_2px_6px_rgba(255,255,255,0.35)] hover:bg-indigo-700 hover:shadow-[0_6px_14px_rgba(79,70,229,0.45),inset_0_2px_6px_rgba(255,255,255,0.35)]",
    secondary:
      "bg-white text-indigo-600 border border-indigo-600 shadow-[0_4px_10px_rgba(0,0,0,0.08),inset_0_2px_6px_rgba(255,255,255,0.8)] hover:bg-indigo-50",
    tertiary: "text-indigo-600 hover:bg-indigo-600/10",
  };

  return (
    <button
      type={type}
      className={cn(
        "rounded-xl px-4 py-2 w-fit cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
        buttonVariant[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
