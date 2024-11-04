import Card from "@/components/Card";
import { useProductStore } from "@/store/product";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);

  return (
    <div className="container mx-auto px-12 w-full">
      <div className="px-20 w-full flex flex-col items-center justify-center">
        <h4 className="text-5xl font-medium underline underline-offset-8">
          Product Listing
        </h4>
        <div className="mt-20">
          <p>No Product found</p>
          <Link to={"/create"} className="text-blue-500 hover:underline">
            Create a Product
          </Link>
          <Card
            name="Apple Watch"
            price="304"
            image="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
