import { Plus, Pencil, Trash2, Search, Package } from "lucide-react";
import { useState } from "react";
import CategoryCards from "./CategoryCards";
import CreateProduct from "./modal/CreateProduct";
import Button from "@/components/Button";
import DeleteProduct from "./modal/DeleteProduct";
import Cards from "@/components/Card";
import ProductTable from "@/features/product-features/ProductTable";
import Table from "@/components/Table";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [selectProductId, setSelectProductId] = useState(null);

  const editingProduct = productList.find(
    (product) => product.id === selectProductId,
  );

  const onClose = () => {
    setShowModal(false);
    setSelectProductId(null);
  };

  const onAddProduk = (data) => {
    setProductList((prev) => {
      return [...prev, data];
    });
  };

  const onEditProduct = (editingProduct) => {
    setProductList((prev) => {
      const result = prev.map((product) => {
        if (product.id === selectProductId) {
          return editingProduct;
        } else {
          return product;
        }
      });
      return result;
    });
  };

  const onCLickEdit = (kode) => {
    setSelectProductId(kode);
    setShowModal(true);
  };
  const onClickDelete = (kode) => {
    console.log("kode", kode);
    setSelectProductId(kode);
    setShowModalDelete(true);
  };

  const onDeleteProduct = () => {
    setProductList((prev) => {
      const hasil = prev.filter((product) => {
        console.log(product.id, selectProductId);
        if (product.id !== selectProductId) {
          return true;
        } else {
          return false;
        }
      });
      return hasil;
    });
    setShowModalDelete(false);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl font-semibold text-gray-900">Produk</p>
        <Button
          icon={<Plus size={16} />}
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2"
        >
          Tambah produk
        </Button>
      </div>

      {/* Total produk */}
      <Cards className="mb-6 flex max-w-xs items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
          <Package size={20} className="text-red-600" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Total produk</p>
          <p className="text-lg font-semibold text-gray-900">144 unit</p>
        </div>
      </Cards>

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

      {/* table */}

      <ProductTable
        productList={productList}
        onEdit={onEditProduct}
        onDelete={onDeleteProduct}
      />
      {/* modal */}
      {showModal && (
        <CreateProduct
          showModal={showModal}
          onClose={onClose}
          onAdd={onAddProduk}
          onEdit={onEditProduct}
          defaultValue={editingProduct}
        />
      )}

      <DeleteProduct
        showModalDelete={showModalDelete}
        closeModalDelete={setShowModalDelete}
        onDelete={onDeleteProduct}
      />
    </div>
  );
};
export default Product;
