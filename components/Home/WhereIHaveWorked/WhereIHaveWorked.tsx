import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import BeforeYouCome from "./Descriptions/BeforeYouCome";
import WeDontHave from "./Descriptions/WeDontHave";
import IdealFresh from "./Descriptions/IdealFresh";
import AdvancedAgroManagement from "./Descriptions/AdvancedAgroManagement";
import Fantasia from "./Descriptions/Fantasia";
import SuperBerry from "./Descriptions/SuperBerry";
import ToBring from "./Descriptions/ToBring";
import IBM from "./Descriptions/IBM";
import Taq from "./Descriptions/Taq";
import UofT from "./Descriptions/UofT";
export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case 'IBM':
        return <IBM />;
      case 'Taq':
        return <Taq />;
      case 'UofT':
        return <UofT />
      case "BeforeYouCome":
        return <BeforeYouCome />;
      case "ToBring":
        return <ToBring  />;
      case "WeDontHave":
        return <WeDontHave />;
      case "IdealFresh":
        return <IdealFresh />;
      case "Advanced Agro Management":
        return <AdvancedAgroManagement />;
      case "Fantasia":
        return <Fantasia />;
      case "SuperBerry":
        return <SuperBerry />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("IBM");
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
        </div>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I've Worked
        </span>
        {/* <span className="text-gray-400 opacity-85 font-bold tracking-wider text-lg md:text-2xl">
          （手机请向左滑标题）
        </span> */}
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = props => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState<boolean[]>([
    true,
    false,
    false,
    // false,
    // false,
    // false,
    // false,
  ]);
  const CompanyButton = props => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="remindersSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? left bar Holder */}
      <div
        // className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[297px] translate-y-1 md:w-0.5  
        // rounded md:order-1 order-2  "
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[121px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
        <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="IBM"
            BarPosition={-12}
            BarAvobePosition={1}
            DescriptionJob="IBM"
            // CompanyNameBackgroundColorGreen={[true,false, false, false, false, false]}
            CompanyNameBackgroundColorGreen={[true,false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="Taq"
            BarPosition={32}
            BarAvobePosition={129}
            DescriptionJob="Taq"
            // CompanyNameBackgroundColorGreen={[false,true, false, false, false, false]}
            CompanyNameBackgroundColorGreen={[false,true, false,]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="Uni of Toronto"
            BarPosition={76}
            BarAvobePosition={257}
            DescriptionJob="UofT"
            // CompanyNameBackgroundColorGreen={[false,false, true, false, false, false]}
            CompanyNameBackgroundColorGreen={[false,false, true,]}
            setDescriptionJob={props.setDescriptionJob}
          />
          {/* <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="IdealFresh"
            BarPosition={120}
            BarAvobePosition={385}
            DescriptionJob="IdealFresh"
            CompanyNameBackgroundColorGreen={[false, false, false, true, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={4}
            CompanyName="SuperBerry"
            BarPosition={164}
            BarAvobePosition={513}
            DescriptionJob="SuperBerry"
            CompanyNameBackgroundColorGreen={[false, false, false, false, true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={5}
            CompanyName="AA Management"
            BarPosition={208}
            BarAvobePosition={641}
            DescriptionJob="Advanced Agro Management"
            CompanyNameBackgroundColorGreen={[false, false, false, false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={6}
            CompanyName="Fantasia SME"
            BarPosition={252}
            BarAvobePosition={769}
            DescriptionJob="Fantasia"
            CompanyNameBackgroundColorGreen={[false, false, false, false, false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          /> */}
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div animate={{ x: barAbovePosition }} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
};
