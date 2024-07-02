import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Taq() {
    
  const tasks = [
    {
        text: 'Developed and maintained the Credit Driver that booked over 50K Vehicle lease deals throughout Canada according to lenders’ requests, added features and corresponding toggles while modifying C#, javascript, SQL, XML, and PS1 files.',
        keywords: ['50K', 'C#', 'javascript', 'SQL'],
    },
    {
        text: "Wrote JUnit and Specflow tests, testing in different environments (local, QA, UAT, PROD), and conducting testing by navigating the UI and running queries.",
        keywords: ['JUnit', 'different environments'],
    },
    {
        text: "Communicated closely with Quality Assurance, Project Leads, DevOps team, and developers from other teams to fix bugs, debugged with event logs on GoCD when pushing pipelines, and conduct deployments to Production.",
        keywords: ['Communicated closely', 'event logs', 'pipelines'],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-md font-Arimo tracking-wide">
            Software Developer <span className="text-AAsecondary">@ <a href="https://www.taqauto.com/" target={"_blank"} rel="noreferrer">Taq Automotive Intelligence</a></span>
          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-400">May 2022 - December 2022</span>
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
