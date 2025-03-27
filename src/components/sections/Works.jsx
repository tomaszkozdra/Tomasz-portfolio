"use client";
import React from "react";
import HeroParallax from "./ui/hero-parallax";
import { products } from "./products";

const Works = () => {
  return (
    <div className="overflow-hidden">
      <HeroParallax products={products} />
    </div>
  );
};

export default Works;
