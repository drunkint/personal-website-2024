import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IBM() {
  const tasks = [
    {
        text: 'Developed and maintained an enterprise HR allocation software using Typescript, React, Node.js, Express.js, and SQL (DB2), pushing impactful features that help Operation leaders manage over 55K headcount each month.',
        keywords: ['Typescript', 'React', 'Node.js', 'Express.js', 'SQL', 'manage over 55K headcount'],
    },
    {
        text: "Improved performance of backend apis by 71% through optimizing queries and enhancing parallelism when calling APIs and database queries. ",
        keywords: ['Improved performance of backend apis by 71%', 'ambiguous bugs'],
    },
    {
        text: "Resolved synchronization and other ambiguous bugs by writing Unit tests, utilizing the Chrome & VSCode Debugger, and attention to detail in terms of code and SQL data.",
        keywords: ['synchronization', 'ambiguous bugs'],
    },
    {
        text: "Led the maintenance of four dashboards that visualizes data, including the creation of two from the ground up.",
        keywords: ['Led', 'four dashboards'],
    },
    {
        text: "Led and trained co-workers to work on dashboard development via designing and arranging online sessions, creating recorded tutorials, and writing documents.",
        keywords: ['Led and trained co-workers'],
    },
    {
        text: "Assisted two business units to migrate to the HR application by creating multiple typescript scripts to mass import data, modifying SQL views, and conducting UI and backend logic changes.",
        keywords: ['scripts', 'SQL views'],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-md font-Arimo tracking-wide">
            Software Developer <span className="text-AAsecondary">@ IBM</span>
          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-400">May 2023 - July 2024</span>
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
