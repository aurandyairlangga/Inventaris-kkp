import { useState } from "react";

const ProductForm = () => {
  const styleClassName = "border p-2";
  const [productData, setProductData] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const createProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }).then((res) => res.json());
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async () => {
    try {
      const responseDelete = await fetch(
        "https://fakestoreapi.com/products/1",
        {
          method: "DELETE",
        },
      ).then((res) => res.json());
      console.log("responseDelete", responseDelete);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("productData", productData);

  return (
    <div>
      <input
        name="title"
        placeholder="Masukan Title"
        className={styleClassName}
        onChange={onChangeInput}
      />
      <input
        name="price"
        placeholder="Masukan Title"
        className={styleClassName}
        onChange={onChangeInput}
      />
      <input
        name="description"
        placeholder="Masukan Title"
        className={styleClassName}
        onChange={onChangeInput}
      />
      <input
        name="category"
        placeholder="Masukan Title"
        className={styleClassName}
        onChange={onChangeInput}
      />
      <input
        name="image"
        placeholder="Masukan Title"
        className={styleClassName}
        onChange={onChangeInput}
      />

      <button type="button">hapus</button>
    </div>
  );
};
export default ProductForm;
