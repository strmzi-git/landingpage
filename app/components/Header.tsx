"use client";
import { useMediaQuery } from "react-responsive";
import Button from "./buttons/Button";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

const Header = function () {
  const mobile = useMediaQuery({ minWidth: 500 });
  return (
    <div className="flex items-center justify-between">
      <div className="text-md md:text-xl">Sale Spotter</div>
      {mobile ? (
        <div className=" max-w-[350px] flex justify-end items-center gap-3 md:gap-6 flex-1 text-sm">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">FAQ</div>
          <Button label="Sign in with Twitter" icon={BsTwitter} />
        </div>
      ) : (
        <HiOutlineMenu
          size={25}
          onClick={() => {
            console.log("hi");
          }}
        />
      )}
    </div>
  );
};

export default Header;
