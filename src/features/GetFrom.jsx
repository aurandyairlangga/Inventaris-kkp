import Card from "@/components/Card";
import Table from "@/components/Table";
import { useEffect, useState } from "react";

const GetFrom = () => {
  const [cartList, setCartList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);

  const findProductById = (id) => {
    return productList.find((product) => product.id === id);
  };
  const findUserById = (id) => {
    return userList.find((user) => user.id === id);
  };

  const getAllUser = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/users");

      if (!res.ok) {
        throw new Error("Gagal mengambil data users");
      }

      const users = await res.json();
      setUserList(users);
    } catch (err) {
      console.log(err);
    }
  };
  const getAllProduct = async () => {
    try {
      const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json(),
      );
      setProductList(products);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllCart = async () => {
    // INI PAKE .then
    // fetch("https://fakestoreapi.com/carts")
    //   .then((res) => res.json())
    //   .then((data) => setCartList(data));

    // INI PAKE AWAIT
    try {
      const carts = await fetch("https://fakestoreapi.com/carts").then((res) =>
        res.json(),
      );
      const cartDetailList = carts.map((cart) => {
        const user = findUserById(cart.userId);
        const products = cart.products.map((cartProduct) => {
          const productDetail = findProductById(cartProduct.productId);
          return { ...productDetail, ...cartProduct };
        });
        return { ...cart, user, products };
      });
      setCartList(cartDetailList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUser();
    getAllProduct();
  }, []);

  useEffect(() => {
    if (userList.length === 0 || productList.length === 0) {
      return;
    }

    getAllCart();
  }, [userList, productList]);

  const columns = [
    {
      key: "id",
      header: "ID",
      cell: (value) => value,
    },
    {
      key: "title",
      header: "Name",
      cell: (value) => value,
    },
    {
      key: "price",
      header: "Harga",
      cell: (value) => value,
    },
    {
      key: "description",
      header: "Deskripsi",
      cell: (value) => value,
    },
    {
      key: "category",
      header: "Kategori",
      cell: (value) => value,
    },
  ];
  return cartList.map(({ id, user, products }) => {
    console.log(cartList);
    return (
      <Card key={id}>
        <p>
          {user?.name?.firstname} {user?.name?.lastname}
        </p>
        <Table columns={columns} data={products}></Table>
      </Card>
    );
  });
};
export default GetFrom;
