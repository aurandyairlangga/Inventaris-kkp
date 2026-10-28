import { useState } from "react";

const ProductForm = () => {
  const styleClassName = "flex border border-black-200 rounded-lg p-2";
  const [productData, setProductData] = useState(null);
  const [selectedId, setSelectedId] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const createProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
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
        `https://fakestoreapi.com/products/${selectedId}`,
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
        placeholder="Masukan Price"
        className={styleClassName}
        onChange={onChangeInput}
      />
      <input
        name="description"
        placeholder="Masukan Description"
        className={styleClassName}
        onChange={onChangeInput}
      />
      <input
        name="category"
        placeholder="Masukan Category"
        className={styleClassName}
        onChange={onChangeInput}
      />
      <input
        name="image"
        placeholder="Masukan Image"
        className={styleClassName}
        onChange={onChangeInput}
      />
      <button onClick={createProduct} className="border rounded-lg bg-blue-600">
        submit
      </button>
      <input
        name=""
        placeholder=""
        onChange={(e) => setSelectedId(e.target.value)}
        className={styleClassName}
      />
      <button onClick={deleteProduct} className="border rounded-lg bg-red-600">
        Delete
      </button>
    </div>
  );
};
export default ProductForm;
