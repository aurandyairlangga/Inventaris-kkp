import Cards from "@/components/Cards";
import cn from "@/utils/cn";
import {
  Package,
  CheckCircle2,
  ArrowLeftRight,
  Wrench,
  XCircle,
} from "lucide-react";

// Satu objek = satu kotak. Ada 5 objek, jadi muncul 5 kotak.
const cards = [
  {
    name: "Total produk",
    icon: <Package className="text-red-600" />,
    bgIcon: "bg-red-50",
    total: 144,
  },
  {
    name: "Tersedia",
    icon: <CheckCircle2 className="text-emerald-600" />,
    bgIcon: "bg-emerald-50",
    total: 100,
  },
  {
    name: "Dipinjam",
    icon: <ArrowLeftRight className="text-blue-600" />,
    bgIcon: "bg-blue-50",
    total: 30,
  },
  {
    name: "Perbaikan",
    icon: <Wrench className="text-amber-600" />,
    bgIcon: "bg-amber-50",
    total: 10,
  },
  {
    name: "Rusak",
    icon: <XCircle className="text-gray-600" />,
    bgIcon: "bg-gray-100",
    total: 4,
  },
];

const StatsCards = () => {
  return (
    <div className="mt-8">
      <p className="mb-2 text-xs font-medium text-gray-500">Ringkasan</p>
      {/* 2 kolom di layar kecil, 5 kolom di layar lebar */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {cards.map(({ name, icon, bgIcon, total }) => {
          return (
            <Cards key={name}>
              <div
                className={cn(
                  "mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl",
                  bgIcon,
                )}
              >
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

export default StatsCards;
