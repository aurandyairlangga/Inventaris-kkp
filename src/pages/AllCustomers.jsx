import { ChevronDown, Search } from "lucide-react";

const AllCustomers = () => {
    return(
       <div className="bg-[#FFFFFF] rounded-2xl shadow-sm pl-6 pt-7 pr-11 mt-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div>
          <p className="text-lg font-semibold text-[#000000]">All Customers</p>
          <p className="text-sm text-[#16C098] mt-0.5">Active Members</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 bg-[#F9FBFF] rounded-lg px-3 py-2 w-56">
            <Search />
            <input type="text" placeholder="Search" className="outline-none" />
          </div>

          {/* Sort by */}
          <div className="flex items-center gap-2 bg-[#F9FBFF] rounded-lg px-3 py-2 w-56">
            <p className="text-[#7E7E7E]">Short by:</p>
            <p className="text-[#3D3C42] font-medium">Newest</p>
            <ChevronDown />
          </div>
        </div>
      </div>
      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 border-b border-[#FFFFFF] pb-3">
        <p className="text-xs text-[#B5B7C0]">Customer Name</p>
        <p className="text-xs text-[#B5B7C0]">Company</p>
        <p className="text-xs text-[#B5B7C0]">Phone Number</p>
        <p className="text-xs text-[#B5B7C0]">Email</p>
        <p className="text-xs text-[#B5B7C0]">Country</p>
        <p className="text-xs text-[#B5B7C0]">Status</p>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-6 gap-4 items-center border-b border-[#FFFFFF] py-4">
        <p className="text-sm text-[#292D32] font-medium">Floyd Miles</p>
        <p className="text-sm text-[#292D32]">Yahoo</p>
        <p className="text-sm text-[#292D32]">(205) 555-0100</p>
        <p className="text-sm text-[#292D32]">floyd@yahoo.com</p>
        <p className="text-sm text-[#292D32]">Kiribati</p>
        <div>
          <p className="text-xs font-medium px-3 py-1 rounded-full bg-rose-50 text-[#DF0404] w-fit">
            Inactive
          </p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-6 gap-4 items-center border-b border-[#FFFFFF] py-4">
        <p className="text-sm text-[#292D32] font-medium">Ronald Richards</p>
        <p className="text-sm text-[#292D32]">Adobe</p>
        <p className="text-sm text-[#292D32]">(302) 555-0107</p>
        <p className="text-sm text-[#292D32]">ronald@adobe.com</p>
        <p className="text-sm text-[#292D32]">Australia</p>
        <div>
          <p className="text-xs font-medium px-3 py-1 rounded-full bg-rose-50 text-[#DF0404] w-fit">
            Inactive
          </p>
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-6 gap-4 items-center border-b border-[#FFFFFF] py-4">
        <p className="text-sm text-[#292D32] font-medium">Marvin McKinney</p>
        <p className="text-sm text-[#292D32]">Tesla</p>
        <p className="text-sm text-[#292D32]">(252) 555-0126</p>
        <p className="text-sm text-[#292D32] truncate">marving@tesla.com</p>
        <p className="text-sm text-[#292D32]">Iran</p>
        <div>
          <p className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-[#008767] w-fit">
            Active
          </p>
        </div>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-6 gap-4 items-center border-b border-[#FFFFFF] py-4">
        <p className="text-sm text-[#292D32] font-medium">Jerome Bell</p>
        <p className="text-sm text-[#292D32]">Google</p>
        <p className="text-sm text-[#292D32]">(629) 555-0129</p>
        <p className="text-sm text-[#292D32]">jerome@google.com</p>
        <p className="text-sm text-[#292D32]">Réunion</p>
        <div>
          <p className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-[#008767] w-fit">
            Active
          </p>
        </div>
      </div>

      {/* Row 6 */}
      <div className="grid grid-cols-6 gap-4 items-center border-b border-[#FFFFFF] py-4">
        <p className="text-sm text-[#292D32] font-medium">Kathryn Murphy</p>
        <p className="text-sm text-[#292D32]">Microsoft</p>
        <p className="text-sm text-[#292D32]">(406) 555-0120</p>
        <p className="text-sm text-[#292D32]">kathryn@microsoft.com</p>
        <p className="text-sm text-[#292D32]">Curaçao</p>
        <div>
          <p className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-[#008767] w-fit">
            Active
          </p>
        </div>
      </div>

      {/* Row 7 */}
      <div className="grid grid-cols-6 gap-4 items-center border-b border-[#FFFFFF] py-4">
        <p className="text-sm text-[#292D32] font-medium">Jacob Jones</p>
        <p className="text-sm text-[#292D32]">Yahoo</p>
        <p className="text-sm text-[#292D32]">(208) 555-0112</p>
        <p className="text-sm text-[#292D32]">jacob@yahoo.com</p>
        <p className="text-sm text-[#292D32]">Brazil</p>
        <div>
          <p className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-[#008767] w-fit">
            Active
          </p>
        </div>
      </div>

      {/* Row 8 */}
      <div className="grid grid-cols-6 gap-4 items-center py-4">
        <p className="text-sm text-[#292D32] font-medium">Kristin Watson</p>
        <p className="text-sm text-[#292D32]">Facebook</p>
        <p className="text-sm text-[#292D32]">(704) 555-0127</p>
        <p className="text-sm text-[#292D32]">kristin@facebook.com</p>
        <p className="text-sm text-[#292D32]">Åland Islands</p>
        <div>
          <p className="text-xs font-medium px-3 py-1 rounded-full bg-rose-50 text-[#DF0404] w-fit">
            Inactive
          </p>
        </div>
      </div>
    </div>
    )
};
export default AllCustomers;