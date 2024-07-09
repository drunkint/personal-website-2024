import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import Img from '../smallComp/image/Img';

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <>
    {/* // ? Image in Desktop and Tablet */}
    <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden max-w-2xl mx-auto">
      <div
        className="group-hover:translate-x-3 group-hover:translate-y-3
             duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
             translate-y-5 rounded"
      ></div>

      <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
        <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
        <Img
          src={src}
          className={"object-contain rounded-lg"}
          alt="An image of Angus Lee (Hsu Shen) 李旭紳, a University of Toronto Computer Science Student interned in IBM."
        />
      </div>
    </div>

    {/* // ?Image in Mobile */}
    <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
      <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
      <div className="absolute w-48 h-full rounded overflow-hidden">
        <Img
          src={src}
          className={"object-contain rounded-lg"}
          alt="An image of Angus Lee (Hsu Shen) 李旭紳, a University of Toronto Computer Science Student interned in IBM."
        />
      </div>
      <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
    </div>
  </>
  );


  return (
    <div className="sm:mx-0 ">
      {slug ? (
        <Link href={`/blog/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
