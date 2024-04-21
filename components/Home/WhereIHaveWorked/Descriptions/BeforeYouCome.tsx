import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function BeforeYouCome() {
  const tasks = [
    {
      text: "记得填写",
      keywords: [""],
    },
    {
      text: "确认你有司机，不然等着叫Uber吧：）如果不确定的话跟我说！",
      keywords: ["有司机"],
    },
    {
      text: "如果不能准时下午两点前到的话，要跟我说哦～营地很大，很容易迷路。",
      keywords: ["有司机"],
    },
    {
      text: "确认你们写在报名表单的英文名字是你们想要印在名牌上面的英文名字。比如说，我叫Angus，但我可能在报名表单的First Name 那边写XuShen（拼音）。但我平常想被叫做Angus，所以这时候要跟我反应！",
      keywords: ['报名表单的英文名字', '印在名牌上面的英文名字'],
    },
    {
      text: "各位，祷告的力量是大的。请大家从现在开始每天为自己、小组、讲员和营会来祷告，求神保守每个环节都可以顺利，也祷告自己有一颗敞开学习的心，在营会中有满满的收获！",
      keywords: ['祷告的力量是大的', '敞开学习的心', '为自己、小组、讲员和营会来祷告'],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-lg font-Arimo tracking-wide">
            来之前记得完成这些东西～
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
                {index === 0 ? 
                  <a 
                    href="https://docuseal.co/d/wcy8CGBrPXVPHL" 
                    target="_blank"
                    className="sm:text-md text-md text-AAsecondary"
                    rel="noopener noreferrer"
                    >
                      Waiver: https://docuseal.co/d/wcy8CGBrPXVPHL
                    </a>
                  : <></>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
