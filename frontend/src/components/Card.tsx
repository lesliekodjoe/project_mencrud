import React from "react";
import { FaEdit } from "react-icons/fa";

type Props = {
  name: string;
  image: string;
  price: string;
};

const Card = ({ name, image, price }: Props) => {
  return (
    <div className="bg-gray-400 rounded-md">
      <img src={image} alt="" width={240} height={240} />
      <div className="">
        <h4>{name}</h4>
        <p>{price}</p>
        <div>
          <button>
            Edit <FaEdit />
          </button>
          <button>Bu</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
