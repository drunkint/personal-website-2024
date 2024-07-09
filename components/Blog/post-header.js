import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Img from "../smallComp/image/Img";
import { useRouter } from "next/router";

export default function PostHeader({ title, coverImage, date, tags }) {
  const router = useRouter();
  return (
    <div className="py-4 mx-auto lg:py-24 lg:mx-auto max-w-4xl">
      <button
        className="text-lg text-AAsecondary rounded-lg pl-4 py-2 hover:bg-AAtertiary "
        type="button"
        onClick={() => router.back()}
      >
        Back
      </button>
      <h1 className="text-gray-300 font-bold text-7xl pl-3 mt-4 py-8">
        {title}
      </h1>
      <div className="mb-6 text-lg text-gray-300 pl-4 mx-auto">
        <DateFormatter dateString={date} />
        <div className="w-full">
          tags:{" "}
          {tags.map((tag) => (
            <span
              key={tag}
              className=" inline-block bg-AAtertiary text-AAsecondary text-lg font-medium ml-1 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <PostTitle>{title}</PostTitle>

  //     {/* <div className="mb-8 md:mb-16 sm:mx-0">
  //     </div> */}
  //     <div className="max-w-2xl mx-auto">
  //     {/* <CoverImage
  //       title={title}
  //       src={coverImage}
  //       height={620}
  //       width={1240}
  //       /> */}
  //       {/* <div className="mb-6 text-lg">
  //         <DateFormatter dateString={date} />
  //       </div> */}
  //     </div>
  //   </>
  // )
}
