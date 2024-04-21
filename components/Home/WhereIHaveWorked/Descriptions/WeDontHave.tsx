import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function WeDontHave() {
  const tasks = [
    {
      text: "营会没有Tap Machine。所以如果你要在营会书摊买书的话，记得带Cash或直接Etransfer",
      keywords: ["没有Tap Machine", "买书", "带Cash或直接Etransfer"],
    },
    {
      text: "营会没有宵夜。所以嘴馋的话记得自己带零食，并且不要留下碎屑等痕迹。",
      keywords: ["没有宵夜", "自己带零食", "不要留下碎屑"],
    },
    {
      text: "营会没有Wifi。所以请自备流量（紧急的话跟我借也可以...不要拿来刷短视频/看Youtube就好）",
      keywords: ["没有Wifi", "自备流量"],
    },
    {
      text: "营会尽量不要带贵重物品（如ipad、笔电、狗等等）。如果有东西坏了或不见了，CCEF主办方不会负任何责任（没错这在Waiver上，而且你签了）",
      keywords: ["不要带贵重物品", "ipad、笔电、狗", "CCEF主办方不会负任何责任"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-lg font-Arimo tracking-wide">
            营会没有这些东西QWQ
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
