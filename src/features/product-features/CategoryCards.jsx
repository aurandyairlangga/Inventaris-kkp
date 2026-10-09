import Cards from "@/components/Card";
import cn from "@/utils/cn";
import { Monitor, Mouse, NotebookPen, Printer } from "lucide-react";

const categories = [
  {
    name: "PC",
    icon: <Monitor className="text-blue-600" />,
    bgIcon: "bg-blue-50",
    total: 32,
  },
  {
    name: "Printer",
    icon: <Printer className="text-violet-600" />,
    bgIcon: "bg-violet-50",
    total: 14,
  },
  {
    name: "Aksesoris",
    icon: <Mouse className="text-emerald-600" />,
    bgIcon: "bg-emerald-50",
    total: 55,
  },
  {
    name: "ATK",
    icon: <NotebookPen className="text-amber-600" />,
    bgIcon: "bg-amber-50",
    total: 43,
  },
];

const CategoryCards = () => {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-gray-500">Kategori</p>
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {categories.map(({ name, icon, bgIcon, total }) => {
          return (
            <Cards key={name}>
              <div
                className={cn(
                  "mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl",
                  bgIcon,
                )}
              >
                {/* INI ICON */}
                {icon}
              </div>
              <p className="text-sm text-gray-700">{name}</p>
              <p className="text-base font-semibold text-gray-900">{total}</p>
            </Cards>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCards;
