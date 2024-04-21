import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const angusInterests = [
    ["1点前睡觉（没有一次成功）", "听谐音笑话", "自己煮饭"],
    ["听音乐（日/独立）", "抱石", "看小宝宝短视频&动漫"],
  ];
  const angusInterestsCombined = angusInterests.flat(1);
  return (
    <div id="aboutMeSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
             小组长介绍
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-md text-lg ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                哈啰我是你们的小队长Angus！
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                我來自UTSC MCF，目前读大五CS，正在因为Coop而持续延毕中🫠
                {/* Since pursuing my engineering degree, my career has taken me through diverse industries, allowing me to
                refine my expertise in desktop and web development. In the realm of{" "}
                <span className="text-AAsecondary">web3</span>, I am dedicated to pushing boundaries and driving
                advancements. With experience working alongside esteemed organizations like{" "}
                <span className="text-AAsecondary">ENS Vision</span>, where I played a key role in releasing v2 of{" "}
                <span className="text-AAsecondary">ENS Vision Marketplace</span> , my passion for web3 and continuous
                learning drives me to make a positive impact and advance technology. */}
              </span>
            </div>
            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div> */}

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                以下是一些我引以为傲的兴趣：
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-lg">
                  {angusInterests[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-md text-md">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-lg">
                  {angusInterests[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-md text-md">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                很开心能认识大家，期待我们可以一起在这次的营队中很有得着！٩(^ᗜ^ )و ´-
              </span>
            </div>
            {/* Moved to beginning */}
            {/* <div className="font-Header ">
              <span className="text-gray-400 ">
                我去年来参加精兵营一开始是抱着“好累哦不想来”的心态 —— 要不是我的好朋友Henson逼我来，我周末就会在家耍废废。
                但后来发现其实是一个蛮有收获的经验。
                除了紧凑的课程外，还可以跟一群不认识的年轻基督徒们bound，甚至是在Queens活水团期的敬拜中嚎啕大哭（他们超棒超有恩膏的）。
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                总之呢！除了课程之外，鼓励大家多多认识人，听听看他们平常团期里都做什么，以及他们把时间都花在什么事上。
                这样就可以了解他们以及他们所属的团契，除了多了一个好朋友之外或许能给你团期带来什么启发哦～
              </span>
            </div> */}
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/profile.jpeg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/profile.jpeg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
