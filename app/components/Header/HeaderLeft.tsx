"use client";
import Image from "next/image";

const HeaderLeft = function () {
  return (
    <div className="w-full md:w-[50%] md:order-1">
      <div className="w-full h-full relative ">
        <div className="h-[600px] md:h-[450px] w-full bg-[#15CB92] bg-opacity-60 rounded-md flex items-center justify-center">
          <Image
            src={"/images/Product.png"}
            alt="Sale Spotter product image"
            width={250}
            height={250}
            className="opacity-100 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
