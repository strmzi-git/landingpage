"use client";
import { BsArrowRightShort, BsTwitter } from "react-icons/bs";
import HeaderPoint from "./HeaderPoint";
import Button from "../buttons/Button";
import { useMediaQuery } from "react-responsive";

const HeaderRight = function () {
  const isMobile = useMediaQuery({ minWidth: 400 });
  return (
    <div className="w-full md:w-[50%] md:py-8">
      <h1 className="z-50 max-w-[500px] abolsute text-neutral-800 text-[32px] md:text-[45px] md:leading-[50px] font-semibold leading-[40px] mt-8 mb-2 md:mb-4 ">
        Do yourself a favour and set your savings ablaze with sale spotter
      </h1>
      <div className="text-neutral-600">
        <HeaderPoint label="Get notified immediately when a product of your choice drops below a price threshold you specify. Best of all? It's effortess! Sign up once, and receive a reminder when there's an appealing sale." />
      </div>
      <div className="flex flex-col items-start xs:items-center lg:flex-row lg:items-center md:items-start xs:flex-row md:flex-col gap-4">
        <Button
          label="Sign in with Twitter"
          large={isMobile ? false : true}
          icon={BsTwitter}
        />
        <p className=" cursor-pointer flex items-center font-semibold text-sm">
          Learn more <BsArrowRightShort size={20} />
        </p>
      </div>
    </div>
  );
};

export default HeaderRight;
