import { useState } from "react";

const Modal = ({ showModal = false, 
    onClose = () => {},
    onKirim =() =>{},
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
        const {name,value} = e.target;
        setOnStatus((prev => {
            return {...prev, [name]: value};
        }));
    };

    const onSubmit = () => {
        console.log("formModal",status);
        onKirim(status);
        onClose();
    }

  return (
    showModal && (
      <div className="fixed bg-black/20 h-dvh w-full top-0 left-0 flex items-center justify-center ">
        <div className="w-full max-w-sm rounded-[28px] bg-white p-5">
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
            <input
            name="kategori"
              onChange={onChangeForm}
              placeholder="Masukan kategori anda..."
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div>
            <p className="mb-1 block text-sm text-gray-800">Stok</p>
            <textarea
              name="stok"
              onChange={onChangeForm}
              placeholder="Masukan stok anda..."
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onClose(false)}
              type="submit"
              className="w-full rounded-xl bg-lime-400 py-3 text-sm font-semibold text-black"
            >
              Cancel
            </button>

            <button
              onClick={onSubmit}
              type="submit"
              className="w-full rounded-xl bg-lime-400 py-3 text-sm font-semibold text-black cursor-pointer"
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
