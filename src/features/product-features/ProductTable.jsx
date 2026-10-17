import Table from "@/components/Table";
import { Pencil, Trash2 } from "lucide-react";

const ProductTable = ({
  productList = [],
  onEdit = () => {},
  onDelete = () => {},
}) => {
  console.log(productList);
  const columns = [
    {
      key: "tanggal",
      header: "Tanggal",
      cell: (value) => value,
    },
    {
      key: "noFaktur",
      header: "No Faktur",
      cell: (value) => value,
    },
    {
      key: "namaBarang",
      header: "Nama Barang",
      cell: (value) => value,
    },
    {
      key: "kategori",
      header: "Kategori",
      cell: (value) => value,
    },
    {
      key: "jumlahUnit",
      header: "Jumlah",
      cell: (value) => value,
    },
    {
      key: "asal",
      header: "Asal",
      cell: (value) => value,
    },
    { key: "lokasi", header: "Kode Barang", cell: (value) => value },
    {
      key: "id",
      header: "Aksi",
      cell: (id) => (
        <div className="flex items-center  gap-3 text-gray-400">
          <button
            onClick={() => onEdit(id)}
            type="button"
            aria-label="Edit"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-600"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(id)}
            type="button"
            aria-label="Hapus"
            className="cursor-pointer hover:text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];
  return <Table columns={columns} data={productList} />;
  // return (
  //   // <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
  //   //   <table className="w-full text-left text-sm">
  //   //     <thead>
  //   //       <tr className="border-b border-gray-200 text-xs font-medium text-gray-500">
  //   //         <th className="px-4 py-3 font-medium">Tanggal</th>
  //   //         <th className="px-4 py-3 font-medium">No Faktur</th>
  //   //         <th className="px-4 py-3 font-medium">Nama produk</th>
  //   //         <th className="px-4 py-3 font-medium">Kategori</th>
  //   //         <th className="px-4 py-3 font-medium">Jumlah</th>
  //   //         <th className="px-4 py-3 font-medium">Asal</th>
  //   //         <th className="px-4 py-3 font-medium">Kode Barang</th>
  //   //         <th className="px-4 py-3 text-right font-medium">Aksi</th>
  //   //       </tr>
  //   //     </thead>

  //   //     <tbody>
  //   //       {productList.map(
  //   //         ({
  //   //           id,
  //   //           kategori,
  //   //           noFaktur,
  //   //           jumlahUnit,
  //   //           asal,
  //   //           tanggal,
  //   //           lokasi,
  //   //           namaBarang,
  //   //         }) => (
  //   //           <tr key={id} className="border-b border-gray-100 last:border-b-0">
  //   //             <td className="px-4 py-3 text-gray-700">{tanggal}</td>
  //   //             <td className="px-4 py-3 text-gray-700">{noFaktur}</td>
  //   //             <td className="px-4 py-3 text-gray-900">{namaBarang}</td>
  //   //             <td className="px-4 py-3">
  //   //               <span className="inline-block rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-700">
  //   //                 {kategori}
  //   //               </span>
  //   //             </td>
  //   //             <td className="px-4 py-3 text-gray-700">{jumlahUnit}</td>
  //   //             <td className="px-4 py-3 text-gray-700">{asal}</td>
  //   //             <td className="px-4 py-3 text-gray-700">{lokasi}</td>
  //   //             <td className="px-4 py-3">
  //   //               <div className="flex items-center justify-end gap-3 text-gray-400">
  //   //                 <button
  //   //                   onClick={() => onEdit(id)}
  //   //                   type="button"
  //   //                   aria-label="Edit"
  //   //                   className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-600"
  //   //                 >
  //   //                   <Pencil size={16} />
  //   //                 </button>
  //   //                 <button
  //   //                   onClick={() => onDelete(id)}
  //   //                   type="button"
  //   //                   aria-label="Hapus"
  //   //                   className="cursor-pointer hover:text-red-600"
  //   //                 >
  //   //                   <Trash2 size={16} />
  //   //                 </button>
  //   //               </div>
  //   //             </td>
  //   //           </tr>
  //   //         ),
  //   //       )}
  //   //     </tbody>
  //   //   </table>
  //   // </div>
  // );
};

export default ProductTable;
