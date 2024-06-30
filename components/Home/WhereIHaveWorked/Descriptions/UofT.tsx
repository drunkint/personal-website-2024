import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function UofT() {
    const courses = [
        {
            text: 'CSCA67 Discrete Math, 2022 Fall, 2023 Fall',
            keywords: ['CSCA67 Discrete Math'],
        },
        {
            text: 'MATA30 Calculus 1 for Physical Sciences, 2022 Fall, 2023 Fall, 2024 Winter',
            keywords: ['MATA30 Calculus 1 for Physical Sciences'],
        },
        {
            text: 'MATA33 Calculus for Management 2, 2022 Winter',
            keywords: [],
        },
        {
            text: 'MATA34 Calculus for Management, 2023 Fall',
            keywords: [],
        },
    ];

    const tasks = [
        {
            text: "Responsible for the following courses:",
            keywords: [],
        },
        {
            text: "Held Tutorials and Office Hours for 30 students every week, explained problems with clarity and patience, graded exams in courses with more than 550 students, and created weekly/biweekly quizzes that were written by 450 students.",
            keywords: ["Held Tutorials", "created weekly/biweekly quizzes", "450 students   "],
        },
        {
            text: "Conducted effective communication among the professor and TAs to coordinate teaching material and scheduling.",
            keywords: [],
        },
    ];

    function normalBulletPoint (index: number, item: {text: string, keywords: string[]}) : React.JSX.Element {
        return (<div
            key={index}
            className="flex flex-row space-x-2"
        >
            <ArrowIcon
                className={
                    " h-5 w-4 text-AAsecondary flex-none"
                }
            />
            <span
                className="text-gray-400 sm:text-md text-md"
                dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                        item.text,
                        item.keywords
                    ),
                }}
            ></span>
        </div>);
    };

    function semiBulletPoint(index: number, item: {text: string, keywords: string[]}): React.JSX.Element {
        return (<div
            key={index}
            className="flex flex-row space-x-2"
        >
            <ArrowIcon
                className={
                    "ml-5 h-5 w-4 text-AAsecondary flex-none"
                }
            />
            <span
                className="text-gray-400 sm:text-md text-md"
                dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                        item.text,
                        item.keywords
                    ),
                }}
            ></span>
        </div>)
    };

    function semiBulletPoints(): React.JSX.Element[] {
        return (courses.map((item, index) => {
            return semiBulletPoint(index, item);
        }))
    }

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-md font-Arimo tracking-wide">
                        Teaching Assistant{" "}
                        <span className="text-AAsecondary">
                            @ The University of Toronto
                        </span>
                    </span>
                    {/* Date */}
                    <span className="font-mono text-sm text-gray-400">
                        January 2022 - April 2024
                    </span>
                </div>
                <div className="flex flex-col space-y-4 sm:text-md text-md">
                    {/* Tasks Description 1 */}
                    {tasks.map((item, index) => {
                        if (index === 0) {
                            return (
                                <div>
                                    {normalBulletPoint(index, item)}
                                    {semiBulletPoints()}
                                </div>);
                        } else {
                            return normalBulletPoint(index, item);
                        }
                        
                    })}
                </div>
            </div>
        </>
    );
}
