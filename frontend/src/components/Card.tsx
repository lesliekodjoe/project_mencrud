import { useProductStore } from "@/store/product";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type Props = {
  id: string
  name: string;
  image: string;
  price: number;
};

const Card = ({ id, name, image, price }: Props) => {
  const { deleteProducts } = useProductStore();
  const handleDeleteProduct = async (pid: string) => {
    const { success, message } = await deleteProducts(pid);
    if (!success) {
      alert(message);
    } else {
      alert("Successful entry");
    }
  };
  return (
    <div className="bg-black rounded-md text-white">
      <img src={image} alt="" width={240} height={240} />
      <div className="my-3 px-5 flex flex-col gap-y-1">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p>{price}</p>
        <div className="mt-4 flex gap-x-3">
          <button className="flex items-center bg-white text-black p-2 rounded-sm">
            <FaEdit />
          </button>
          <button className="flex items-center bg-white text-black p-2 rounded-sm" onClick={()=> handleDeleteProduct(id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
