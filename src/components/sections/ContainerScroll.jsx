"use client";
import React from "react";
import ContainerScroll from "./ui/container-scroll-animation";
import { assets } from "/src/assets/assets.js";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="md:text-[6rem] text-4xl font-semibold text-black dark:text-white leading-none">
              Ostatni Projekt
            </h1>
          </>
        }
      >
        <img
          src={assets.stats}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
