import { Search } from "lucide-react";

const DataAsset = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-slate-800">Data Aset</h1>
      <p className="mb-5 text-sm text-slate-500">
        Semua unit aset IT. Aset baru terbentuk otomatis dari halaman
        Penerimaan.
      </p>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="mb-4 flex flex-wrap gap-3">
          <div className="relative min-w-[200px] flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              placeholder="Cari nomor faktur atau nama aset"
              className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500">
            <option>Semua status</option>
            <option>Tersedia</option>
            <option>Dipinjam</option>
            <option>Perbaikan</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 font-medium">No Faktur</th>
                <th className="py-2 font-medium">Nama</th>
                <th className="py-2 font-medium">Kategori</th>
                <th className="py-2 font-medium">Lokasi</th>
                <th className="py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 font-medium text-slate-700">LAP-001</td>
                <td className="py-2.5">Lenovo ThinkPad E14</td>
                <td className="py-2.5">Laptop</td>
                <td className="py-2.5">Ruang IT</td>
                <td className="py-2.5">
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                    Tersedia
                  </span>
                </td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 font-medium text-slate-700">LAP-002</td>
                <td className="py-2.5">Lenovo ThinkPad E14</td>
                <td className="py-2.5">Laptop</td>
                <td className="py-2.5">Gudang</td>
                <td className="py-2.5">
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    Dipinjam
                  </span>
                </td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 font-medium text-slate-700">PRI-001</td>
                <td className="py-2.5">Epson L3210</td>
                <td className="py-2.5">Printer</td>
                <td className="py-2.5">Gudang</td>
                <td className="py-2.5">
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                    Perbaikan
                  </span>
                </td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 font-medium text-slate-700">PC-001</td>
                <td className="py-2.5">PC Dell OptiPlex</td>
                <td className="py-2.5">PC</td>
                <td className="py-2.5">Ruang IT</td>
                <td className="py-2.5">
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                    Tersedia
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DataAsset;
