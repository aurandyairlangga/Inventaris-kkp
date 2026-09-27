import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Monitor,
  Printer,
  Mouse,
  NotebookPen,
  Package,
} from "lucide-react";
import { useState } from "react";
import CategoryCards from "./CategoryCards";
import CreateProduct from "./modal/CreateProduct";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false);

  const onAddProduk = (data) => {
    setProductList((prev) => {
      return [...prev, data];
    });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl font-semibold text-gray-900">Produk</p>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <Plus size={16} />
          <p>Tambah produk</p>
        </button>
      </div>

      {/* Total produk */}
      <div className="mb-6 flex max-w-xs items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
          <Package size={20} className="text-red-600" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Total produk</p>
          <p className="text-lg font-semibold text-gray-900">144 unit</p>
        </div>
      </div>

      {/* Kategori */}
      <CategoryCards />

      {/* Search */}
      <div className="mb-3 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 max-w-sm">
        <Search size={16} className="text-gray-400" />
        <input
          placeholder="Cari nama atau kode produk"
          className="w-full text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        {/* Header baris */}
        <div className="flex items-center border-b border-gray-200 px-4 py-3 text-xs font-medium text-gray-500">
          <p className="w-24">Kode</p>
          <p className="flex-1">Nama produk</p>
          <p className="w-28">Kategori</p>
          <p className="w-16">Stok</p>
          <p className="w-16 text-right">Edit/Delete</p>
        </div>

        {productList.map(({ kode, namaProduk, kategori, stok }) => {
          return (
            <div
              key={kode}
              className="flex items-center border-b border-gray-100 px-4 py-3 text-sm"
            >
              <p className="w-24 text-gray-700">{kode}</p>
              <p className="flex-1 text-gray-900">{namaProduk}</p>
              <div className="w-28">
                <p className="inline-block rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-700">
                  {kategori}
                </p>
              </div>
              <p className="w-16 text-gray-700">{stok}</p>
              <div className="flex w-16 items-center justify-end gap-3 text-gray-400">
                <Pencil
                  size={16}
                  className="hover:text-blue-600 cursor-pointer"
                />
                <Trash2
                  size={16}
                  className="hover:text-red-600 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* modal */}
      <CreateProduct
        showModal={showModal}
        onClose={setShowModal}
        onAdd={onAddProduk}
      />
    </div>
  );
};
export default Product;
