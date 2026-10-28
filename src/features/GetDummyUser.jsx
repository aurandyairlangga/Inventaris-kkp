import Card from "@/components/Card";
import Table from "@/components/Table";
import { useEffect, useState } from "react";

const GetDummyUser = () => {
  const [userList, setUserList] = useState([]);

  const getAllUser = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUserList(data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const columns = [
    {
      key: "id",
      header: "ID",
      cell: (value) => value,
    },
    {
      key: "firstName",
      header: "Nama Depan",
      cell: (value) => value,
    },
    {
      key: "lastName",
      header: "nama Belakang",
      cell: (value) => value,
    },
    {
      key: "age",
      header: "Umur",
      cell: (value) => value,
    },
    {
      key: "email",
      header: "Email",
      cell: (value) => value,
    },
    {
      key: "phone",
      header: "Nomor Telepon",
      cell: (value) => value,
    },
    {
      key: "gender",
      header: "Gender",
      cell: (value) => value,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <Card>
        <Table columns={columns} data={userList}></Table>
      </Card>
    </div>
  );
};
export default GetDummyUser;
