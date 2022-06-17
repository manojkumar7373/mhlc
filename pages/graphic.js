import Head from "next/head";
import Image from "next/image";
import MHLClogo from "../public/MHLC Logo.svg";
import Link from "next/link";
import React from "react";

export default function Graphic() {
  return (
    <div>
      <div className=" w-full h-auto flex flex-grow  space-y-3   flex-col tab:flex-row items-center  ">
        <div className="  py-2 w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]  mx-auto tab:mx-0">
          <Image src={MHLClogo} layout="responsive" alt="logo" />
        </div>

        <div className=" w-full h-auto space-x-4 text-lg tab:items-center tab:my-auto  flex mx-auto justify-center tab:justify-end">
          <Link href="" className="  ">
            <a className="  underline text-green-500   ">career</a>
          </Link>

          <button className=" h-auto  px-5 py-2 hover:bg-green-500 bg-green-500 text-white  border-1">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
