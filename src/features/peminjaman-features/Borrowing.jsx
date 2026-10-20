import Table from "@/components/Table";
import { Pencil, Trash2 } from "lucide-react";

const Borrowing = ({
  borrowingList = [],
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const columns = [
    {
      key: "aset",
      header: "Aset",
      cell: (value) => value,
    },
    {
      key: "peminjam",
      header: "Peminjam",
      cell: (value) => value,
    },
    {
      key: "tanggal",
      header: "Tanggal",
      cell: (value) => value,
    },
    {
      key: "hasil",
      header: "Hasil",
      cell: (value) => value,
    },
    {
      key: "id",
      header: "Aksi",
      cell: (id) => (
        <div className="flex items-center gap-3 text-gray-400">
          <button
            type="button"
            onClick={() => onEdit(id)}
            aria-label="Edit"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-600"
          >
            <Pencil size={16} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(id)}
            aria-label="Hapus"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={borrowingList} />;
};

export default Borrowing;
