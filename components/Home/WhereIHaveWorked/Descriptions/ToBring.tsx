import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ToBring() {
  const tasks = [
    {
      text: "盥洗&穿着：浴巾、牙刷、牙膏、洗发水、沐浴露等、吹风机、换洗衣物。听说营地比较冷，可以带一些御寒的衣物。另外牙刷很重要！每年都有人沒帶，然後你不可能跟別人借來用：）",
      keywords: ['浴巾', '牙刷', '换洗衣物', '注意牙刷很重要！'],
    },
    {
      text: "睡觉相关：睡袋或床单、被子、枕头 （营地只提供床垫）、耳塞、眼罩。营地里寝室只有床垫，所以睡袋是必需品！我对声音蛮敏感的，所以耳塞跟眼罩我都超爱。枕头虽然感觉不是必需品，但我们要待3个晚上，我还是建议可以带一下。",
      keywords: ['只有床垫', '睡袋', '耳塞'],
    },
    {
      text: "文书用品：纸质圣经（营会不能使用电子圣经）、笔（写下来才能温故知新）",
      keywords: ['纸质圣经'],
    },
    {
      text: "有用的小物：水瓶、拖鞋、手电筒（手机上的也ok）、防蚊用具。虽然应该机会不多，但我们有可能会在户外活动，防蚊还是蛮建议的。",
      keywords: ['水瓶', '拖鞋', '防蚊用具'],
    },
    {
      text: "其他：注册号码、医疗卡（eg. UHIP/OHIP）、自用药品、雨具",
      keywords: ['注册号码'],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0" >
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-lg font-Arimo tracking-wide">
            装备栏物品一览
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-md text-md">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-400 sm:text-md text-md"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
