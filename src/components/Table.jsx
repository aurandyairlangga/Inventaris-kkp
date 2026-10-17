const Table = ({columns =[],data=[]}) => {
  // const columns = [
  //   {
  //     key: "nama",
  //     header: "Title",
  //     cell: (value) => value,
  //   },
  //   {
  //     key: "kota",
  //     header: "Alamat Sunting",
  //     cell: (value) => value,
  //   },
  //   {
  //     key: "email",
  //     header: "City",
  //     cell: (value) => value,
  //   },
  // ];

  // const data = [
  //   {
  //     nama: "bayu",
  //     email: "bayu@gmail.com",
  //     kota: "bekasi",
  //   },
  //   {
  //     nama: "asep",
  //     email: "asep@gmail.com",
  //     kota: "bekasi",
  //   },
  // ];

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-xs font-medium text-gray-500">
            {columns.map(({ header }) => (
              <th key={header} className="px-4 py-3 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((value) => {
            return (
              <tr
                key={value.email}
                className="border-b border-gray-100 last:border-b-0"
              >
                {columns.map(({ cell, key }) => {
                  return (
                    <td key={key} className="px-4 py-3 text-gray-700">
                      {cell(value[key], value)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
