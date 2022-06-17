import Image from "next/image";
import Date from "../public/calendar.png";
import MHLClogo from "../public/MHLC Logo.svg";
import wmclogo from "../public/Scroll Group 1.svg";
import Mask2 from "../public/Mask Group 5.svg";
import Mask3 from "../public/Mask Group 6.svg";
import Mask1 from "../public/Mask Group 7.svg";
import Link from "next/link";

export default function Home() {
  const careers = [
    {
      id: 0,
      image: Mask1,
      link: "/digital",
      date: "15.07.2022",
      title: "digitalmarketing",
    },
    {
      id: 1,
      image: Mask2,
      link: "/graphic",
      date: "15.06.2022",
      title: "Junior Graphic Desingner",
    },
    {
      id: 2,
      image: Mask3,
      link: "/software",
      date: "16.06.2022",
      title: "Junior Software Engineer",
    },
  ];
  return (
    <div className=" max-w-screen-2xl items-center mx-auto">
      <div className=" w-full h-auto flex flex-grow  space-y-3   flex-col tab:flex-row items-center  ">
        <div className="  py-2 w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]  mx-auto tab:mx-0">
          <Image src={MHLClogo} layout="responsive" alt="logo" />
        </div>

        <div className=" w-full h-auto space-x-4 text-lg tab:items-center tab:my-auto  flex mx-auto justify-center tab:justify-end">
          <Link href="" className="  ">
            <a className="underline text-green-500 ">career</a>
          </Link>

          <button className=" h-auto  px-5 py-2 hover:bg-green-500 bg-green-500 text-white  border-1">
            subscribe
          </button>
        </div>
      </div>
      <div className="   p-10">
        <p className=" w-full flex text-blue-900 font-extrabold font-mono text-[25px] tab:text-[31px] lg:text-[40px] justify-center text-center pb-10  ">
          Join Our Team at Wealth Mind Creation
        </p>
        <Image src={wmclogo} layout="responsive" alt="homepage" />
      </div>
      <div className="  place-content-center p-3 tab:p-6 lg:px-20 lg:py-5 xl:px-28  text-justify mobile:w-full">
        <p id="" className=" ">
          At WMC we believe in working together and working smart. With over
          220+ connectors, we are looking for dynamic and creative individuals
          who are willing to dedicate themselves to provide innovation products
          and services for our clients.
        </p>
        <p id="" className=" ">
          Besides getting the opportunities to unlock the potential at WMC, you
          can also network with some of the most talented people in the industry
          and enjoy many other benefits by working with us.
        </p>
      </div>
      <div className="w-full flex-none lg:flex    pt-5 grid tab:grid-cols-2  ">
        {careers.map((item, index) => {
          return (
            <div key={item.id} className="w-full lg:w-[45%] p-5">
              <Image src={item.image} layout="responsive" alt="homepage" />
              <div className=" border-2 pl-2  ">
                <div className=" pb-8   pt-3">
                  <Image src={Date} alt="homepage" height={17} width="20" />

                  <a>{item.date}</a>
                </div>
                <h className="w-full  text-2xl  ">{item.title}</h>
                <br />
                <div className="  pt-7 pb-3 ">
                  <a href="" className=" text-green-400 text-sm ">
                    Read Roles Responsibilities;
                  </a>
                  <Link href={item.link}>
                    <a className=" text-green-400 text-sm">Apply Now</a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full pt-14  text-center mb-40 ">
        <button className="   p-2 rounded-md   radius-1  bg-[#F4F7F5] justify-items-center ">
          LoadMore
        </button>
      </div>
      <div className=" border-2 bg-blue-900 text-white  py-20 text-center mb-44 space-y-5 ">
        <a className=" pb-3 pt-11 font-bold tab:text-lg md:text-xl">
          Subscribe And Join thousand Like You!
        </a>
        <div className=" w-[80%] h-10 mx-auto text-black flex flex-col tab:flex-row tab:justify-center space-y-3 tab:space-y-0  ">
          <input
            className=" h-full p-2 pr-10"
            id="formFileLg"
            type="text"
            placeholder="vinay@business.com"
          />
          <button className=" w-max mx-auto tab:mx-0  text-white font-bold h-full p-2 bg-green-400">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
