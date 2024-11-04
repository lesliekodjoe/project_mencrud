import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProject = () => {
    console.log(newProduct);
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[600px]">
          <h1 className="text-center text-5xl font-medium">Add a Product</h1>
          <div className="py-20 flex flex-col gap-y-8">
              <input
                type="text"
                name="name"
                className="bg-gray-100 py-2 px-6 rounded-sm"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                className="bg-gray-100 py-2 px-6 rounded-sm"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="bg-gray-100 py-2 px-6 rounded-sm"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <button className="bg-gray-500 py-3 text-white rounded-sm mt-4" onClick={handleAddProject}>
                Add Product
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
