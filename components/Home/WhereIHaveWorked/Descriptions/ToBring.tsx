import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ToBring() {
  const tasks = [
    {
      text: "盥洗&穿着：浴巾、牙刷、牙膏、洗发水、沐浴露等、换洗衣物。注意牙刷很重要！每年都有人沒帶，然後你不可能跟別人借來用：）",
      keywords: ['浴巾', '牙刷', '换洗衣物', '注意牙刷很重要！'],
    },
    {
      text: "睡觉相关：睡袋或床单、被子、枕头 （营地只提供床垫）、耳塞、眼罩",
      keywords: ['睡袋', '耳塞'],
    },
    {
      text: "文书用品：纸质圣经（营会不允许使用电子圣经）、笔",
      keywords: ['纸质圣经'],
    },
    {
      text: "有用的小物：水瓶、拖鞋、手电筒、防蚊用具",
      keywords: ['水瓶', '拖鞋'],
    },
    {
      text: "其他：注册号码、医疗卡（eg. UHIP/OHIP）、自用药品",
      keywords: ['注册号码'],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0" >
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            携带物品清单
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
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
