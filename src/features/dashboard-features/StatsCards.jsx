import Card from "@/components/Card";
import cn from "@/utils/cn";
import { Package, CheckCircle2, ArrowLeftRight, Wrench } from "lucide-react";

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
];

const StatsCards = () => {
  return (
    <div>
      {/* 2 kolom di layar kecil, 5 kolom di layar lebar */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cards.map(({ name, icon, bgIcon, total }) => {
          return (
            <Card key={name}>
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
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCards;
