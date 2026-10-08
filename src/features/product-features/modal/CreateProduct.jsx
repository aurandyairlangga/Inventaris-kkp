import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";

const CreatePenerimaan = ({
  showModal = false,
  onClose = () => {},
  onAdd = () => {},
}) => {
  const [status, setOnStatus] = useState({
    noFaktur: "",
    namaBarang: "",
    kategori: "PC",
    jumlahUnit: "1",
    jenisAsal: "",
    asal: "",
    tanggal: "",
    lokasi: "",
  });

  console.log(status);
  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setOnStatus((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = () => {
    console.log("formModal", status);
    onAdd({ ...status, id: Date.now() });
    onClose();
  };

  return (
    showModal && (
      <Modal>
        <h2 className="text-lg font-semibold text-gray-900">Tambah Produk</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="mb-1 block text-sm text-gray-800">No Faktur</p>
            <input
              name="noFaktur"
              onChange={onChangeForm}
              placeholder="isi kode"
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Nama Barang</p>
            <input
              name="namaBarang"
              onChange={onChangeForm}
              placeholder="Masukan produk anda...."
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Kategori</p>
            <select
              name="kategori"
              onChange={onChangeForm}
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none focus:border-gray-400 cursor-pointer"
            >
              <option value="" disabled hidden>
                Masukan kategori anda...
              </option>
              <option value="PC">PC</option>
              <option value="Printer">PRINTER</option>
              <option value="Aksesoris">AKSESORIS</option>
              <option value="ATK">ATK</option>
            </select>
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Jumlah Unit</p>
            <input
              name="jumlah"
              type="number"
              min="1"
              onChange={onChangeForm}
              placeholder="isi jumlah..."
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Jenis Asal</p>
            <select
              name="jenisAsal"
              onChange={onChangeForm}
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none focus:border-gray-400 cursor-pointer"
            >
              <option value="Pembelian">PEMBELIAN</option>
              <option value="Pindahan">PINDAHAN</option>
            </select>
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Asal/Supplier</p>
            <input
              name="asal"
              onChange={onChangeForm}
              placeholder="Masukan produk anda...."
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Tanggal Terima</p>
            <input
              name="tanggal"
              type="date"
              onChange={onChangeForm}
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Lokasi Awal</p>
            <select
              name="lokasi"
              onChange={onChangeForm}
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none focus:border-gray-400 cursor-pointer"
            >
              <option value="Ruang IT">RUANG IT</option>
              <option value="Gudang">GUDANG</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => onClose(false)}
          >
            Batal
          </Button>
          <Button className="w-full" onClick={onSubmit}>
            Simpan
          </Button>
        </div>
      </Modal>
    )
  );
};

export default CreatePenerimaan;
