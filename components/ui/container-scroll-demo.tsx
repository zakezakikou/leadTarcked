"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[200px] pt-[400px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Discover Our <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Premium Selection
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://www.morningside.nz/news/wp-content/uploads/2025/08/A-surfboard-signed-by-a-local-champion-has-just-sold-for-a-record-price.png"
          alt="surfboard"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-top-left"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
