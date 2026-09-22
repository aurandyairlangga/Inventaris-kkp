import { useState } from "react";

const Modal = ({
  showModal = false,
  onClose = () => {},
  onKirim = () => {},
}) => {
  const [status, setOnStatus] = useState({
    kode: "PRD-001",
    namaProduk: "PC Rakitan i5",
    kategori: "PC",
    stok: "6",
  });

  console.log(status);

  //   const kodeChange = (event) => {
  //     setOnStatus((prev) => {
  //       return { ...prev, kode: event.target.value };
  //     });
  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setOnStatus((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = () => {
    console.log("formModal", status);
    onKirim(status);
    onClose();
  };

  return (
    showModal && (
      <div className="fixed bg-black/20 h-dvh w-full top-0 left-0 flex items-center justify-center ">
        <div className="w-full max-w-sm rounded-[28px] bg-white p-5 flex flex-col gap-4 ">
          <h2 className="text-lg font-semibold text-gray-900">Tambah Produk</h2>
          <div>
            <p className="mb-1 block text-sm text-gray-800">Kode</p>
            <input
              name="kode"
              onChange={onChangeForm}
              placeholder="isi kode"
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Nama Produk</p>
            <input
              name="namaProduk"
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
            <p className="mb-1 block text-sm text-gray-800">Stok</p>
            <input
              name="stok"
              onChange={onChangeForm}
              placeholder="isi stok..."
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onClose(false)}
              type="button"
              className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white cursor-pointer  hover:bg-blue-800 transition-colors "
            >
              Cancel
            </button>

            <button
              onClick={onSubmit}
              type="button"
              className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white cursor-pointer hover:bg-blue-800 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
