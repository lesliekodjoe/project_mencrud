import Card from "@/components/Card";
import { useProductStore } from "@/store/product";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container mx-auto px-12 w-full">
      <div className="px-20 w-full flex flex-col items-center justify-center">
        <h4 className="text-5xl font-medium underline underline-offset-8">
          Product Listing
        </h4>
        <div className="mt-20 flex flex-col items-center justify-center">
          {products.length == 0 && (
            <div>
              <p>No Product found</p>
              <Link to={"/create"} className="text-blue-500 hover:underline">
                Create a Product
              </Link>
            </div>
          )}
          <div className="mt-10 w-full flex justify-center gap-4 md:w-[1200px] flex-wrap">
            {products.map((product) => (
              <Card
                key={product.id}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
