import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean, delta }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.4 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.4 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        哈啰，欢迎来到精兵营的
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.5 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.5 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        第4小队！
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.6 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.6 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        来自Angus的爱心小叮咛🫶
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.7 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.7 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        <div>
        我去年来参加精兵营一开始是抱着“好累哦不想来”的心态 —— 要不是我的好朋友Henson逼我来，我周末就会在家耍废废。
        但后来发现其实是一个蛮有收获的经验。
        除了紧凑的课程外，还可以跟一群不认识的年轻基督徒们bound，甚至是在Queens活水团期的敬拜中嚎啕大哭（他们超棒超有恩膏的）。
        </div>
          <br></br>
        <div>
        总之呢！除了课程之外，鼓励大家多多认识人，听听看他们平常团期里都做什么，以及他们把时间都花在什么事上。
        这样就可以了解他们以及他们所属的团契，除了多了一个好朋友之外或许能给你团期带来什么启发哦～
        </div>
        
        
        {/* I&apos;m a <span className="text-AAsecondary">software engineer</span>, i possess strong problem-solving skills and
        specialize in crafting exceptional <br className="2xl:block hidden" />
        digital experiences. My current area of focus is in the <span className="text-AAsecondary">web3 domain</span>,
        where I actively engage in developing <br className="2xl:block hidden"/>
        and designing immersive <span className="text-AAsecondary">web3 applications</span>. This involves working with{" "}
        <span className="text-AAsecondary">Smart Contracts</span>  on the{" "}
        <span className="text-AAsecondary">Blockchain</span>.  */}
        {/* <br className="2xl:block hidden" />creating and deploying them, as well as implementing the
        front-end components to enable seamless user interactions. */}
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.8 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.8 + props.delta, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/timetable.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            点击我查看行程表：）
          </button>
        </a>
      </motion.div>
    </div>
  );
}
