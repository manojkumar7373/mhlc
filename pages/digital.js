import Head from "next/head";
import Image from "next/image";
import Photo from "../public/digital/Digital-Marketer-Roles_Digital-Marketing-Services_1000px.svg";
import Date from "../public/calendar.png";
import MHLClogo from "../public/MHLC Logo.svg";
import Link from "next/link";
export default function Digital() {
  return (
    <div className=" max-w-screen-2xl items-center mx-auto   ">
      <div className="  w-full h-auto flex flex-grow  space-y-3   flex-col tab:flex-row items-center   ">
        <div className="  py-2  w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]  mx-auto tab:mx-0">
          <Image src={MHLClogo} layout="responsive" alt="logo" />
        </div>

        <div className=" w-full h-auto space-x-4 text-lg tab:items-center tab:my-auto  flex mx-auto justify-center tab:justify-end">
          <Link href="" className="  ">
            <a className="  underline text-green-500 ">career</a>
          </Link>
          <button className=" h-auto  px-5 py-2 hover:bg-green-500 bg-green-500 text-white  border-1">
            subscribe
          </button>
        </div>
      </div>
      <div className="   py-5 lg:px-20 xl:px-20 md:px-10 tab:px-3">
        <div className="flex  flex-col lg:flex-row-reverse xl:flex-row-reverse tab:flex-row-reverse md:flex-row-reverse   border-2  ">
          <div className=" w-full lg:w-[50%] h-auto px-4  ">
            <Image src={Photo} layout="responsive" alt="homepage" />
          </div>
          <div className="w-full p-2 py-5">
            <div className="  ">
              <Image src={Date} alt="homepage" height={17} width="20" />

              <a>15.6.2022</a>
            </div>
            <h1 className=" text-blue-600 font-bold text-xl py-5">
              DIGITAL MARKETER
            </h1>
            <h3 className=" font-medium text-lg">
              Job Description & Role for Specialists
            </h3>
            <p className=" w-full text-justify">
              A digital marketing specialist has in-depth knowledge in the field
              and is an experienced individual. He is well-versed with all the
              digital marketing channels and tools.
            </p>
            <h3 className="  font-medium pt-5">Responsibilities-</h3>
            <ul className=" pl-8 list-disc">
              <li>Keep up-to-date with trends</li>
              <li>Manage marketing insights</li>

              <li>Plan and supervise marketing campaigns </li>

              <li>Look into customer relationship management (CRM)</li>
              <li>Website management and optimization</li>
              <li>Social media page optimization</li>
              <li>Track website traffic and other metrics</li>
              <li>Optimize the performance of the website</li>
              <li>
                Give ideas as to how to increase ROI (returns on investment)
              </li>
              <li>Provide reports to the managing teams and clients</li>
              <li>Supervise and overlook marketing teams</li>
              <li>Pitch new ideas to the client</li>
            </ul>
            <h3 className=" font-medium pt-5">
              Skills Qualifications Required-
            </h3>
            <ul className=" pl-8 list-disc">
              <li>Good communication skills </li>
              <li>Managerial skills</li>
              <li>
                Minimum 1-2 years of experience in the digital marketing
                industry
              </li>
              <li>Ability to generate and analyze data</li>
              <li>Should be able to work under pressure</li>
              <li>Knowledge of various metrics</li>
              <li>SEO skills and knowledge</li>
            </ul>
            <div className="   flex flex-col tab:flex-row tab:pl-10 xl:space-x-4 lg:space-x-4 md:space-x-4 tab:space-x-4  space-y-3 tab:space-y-0 pt-5 mx-auto ">
              <button className=" w-max mx-auto tab:mx-0 h-full p-2  hover:bg-blue-500 bg-blue-500 text-white  border-1">
                Upload Resume
              </button>
              <button className="  w-max mx-auto tab:mx-0 h-full p-2  hover:bg-green-500 bg-green-500 text-white  border-1">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-36">
        <div className=" border-2 bg-blue-900 text-white py-20 text-center mb-44 space-y-5 ">
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
    </div>
  );
}
