import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Img from '../smallComp/image/Img';

export default function PostHeader({ title, coverImage, date, tags }) {
  return (
    <div className="py-24 mx-auto max-w-3xl">
      <h1 className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4 py-8">
        {title}
      </h1>
      <div className="mb-6 text-lg text-gray-300">
        <DateFormatter dateString={date} />
        <div>
        {/* tags: {
          <span class="bg-#3B4252 text-AAsecondary text-italic">
          {tags.join(', ')}
          </span>
        
        } */}
        
        tags: {tags.map(tag => (
          // <span class="bg-#3B4252 text-AAsecondary text-italic">
          //   #{tag}
          // </span>
          <span key='tag' className="bg-AAtertiary text-AAsecondary text-lg font-medium me-2 px-2.5 py-0.5 rounded-full">
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
