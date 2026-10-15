import Table from "@/components/Table";
import { Pencil, Trash2 } from "lucide-react";

const ProductTable = ({
  productList = [],
  onEdit = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      {/* Header baris */}

      <div className="flex items-center border-b border-gray-200 px-4 py-3 text-xs font-medium text-gray-500">
        <p className="w-24">Tanggal</p>
        <p className="w-24">No Faktur</p>
        <p className="flex-1">Nama produk</p>
        <p className="w-28">Kategori</p>
        <p className="w-28">Jumlah</p>
        <p className="w-28">Asal</p>
        <p className="w-28">Kode Barang</p>
        <p className="w-16 text-right">Aksi</p>
      </div>

      {productList.map(
        ({
          id,
          kategori,
          noFaktur,
          jumlahUnit,
          asal,
          tanggal,
          lokasi,
          namaBarang,
        }) => (
          <div
            key={id}
            className="flex items-center border-b border-gray-100 px-4 py-3 text-sm"
          >
            <p className="w-24 text-gray-700">{tanggal}</p>
            <p className="w-24 text-gray-700">{noFaktur}</p>
            <p className="flex-1 text-gray-900">{namaBarang}</p>
            <div className="w-28">
              <p className="inline-block rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-700">
                {kategori}
              </p>
            </div>
            <p className="w-28 flex text-gray-700">{jumlahUnit}</p>
            <p className="w-28 text-gray-700">{asal}</p>
            <p className="w-28 text-gray-700">{lokasi}</p>
            <div className="flex w-16 items-center justify-end gap-3 text-gray-400">
              <button
                onClick={() => onEdit(id)}
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => onDelete(id)}
                type="button"
                className="hover:text-red-600 cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ),
      )}
      <Table />
    </div>
  );
};
export default ProductTable;
