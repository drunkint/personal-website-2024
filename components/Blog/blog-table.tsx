import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const formatDate = (date: string) => {
  const dateString = new Date(date).toDateString();
  const dateArrayWithoutWeek = dateString.split(" ").slice(1);
  dateArrayWithoutWeek[1] = dateArrayWithoutWeek[1] + ",";
  const dateStringWithoutWeek = dateArrayWithoutWeek.join(" ");

  return dateStringWithoutWeek;
};

const getAllTags = (allPosts) => {
  const tagToCount = new Map<string, number>();
  allPosts.forEach((post) => {
    const currentTags = post.tags;
    currentTags.forEach((tag) => {
      if (!tagToCount.has(tag)) {
        tagToCount.set(tag, 1);
      } else {
        const currentTagCount = tagToCount.get(tag);
        tagToCount.set(tag, currentTagCount + 1);
      }
    });
  });

  const tagToCountArray = [];
  for (let tag of tagToCount.keys()) {
    tagToCountArray.push({ tag: tag, count: tagToCount.get(tag) });
  }
  const tags = tagToCountArray
    .sort((a, b) => a.count - b.count)
    .map((elem) => elem.tag);
  return tags;
};

export default function BlogTable({ allPosts }) {
  const [postsToShow, setPostsToShow] = useState(allPosts);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const cachedSearchText: string = localStorage.getItem("searchText");
    if (cachedSearchText != null) {
      setSearchText(cachedSearchText);
      filterPosts(cachedSearchText);
    }
  }, []);

  const filterPosts = (filterText: string) => {
    if (!filterText) {
      return setPostsToShow(allPosts);
    }

    const lowerFilterText = filterText.toLocaleLowerCase();
    const constructingPostsToShow = [];
    allPosts.forEach((post) => {
      // check if any of the tags contains filter text
      if (
        post.tags.some((tag) => tag.toLowerCase().includes(lowerFilterText))
      ) {
        constructingPostsToShow.push(post);
        return;
      }

      // check if the title contains filter text
      if (post.title.toLowerCase().includes(lowerFilterText)) {
        constructingPostsToShow.push(post);
        return;
      }
    });

    setPostsToShow(constructingPostsToShow);
  };

  const formatTags = (tags: string[]) => {
    return tags.map((tag) => (
      <span
        key={tag}
        className="relative inline-block px-2 py-1 font-semibold text-AAsecondary mx-1 hover:cursor-pointer"
        onClick={() => {
          setSearchText(tag);
          filterPosts(tag);
        }}
      >
        <span
          aria-hidden
          className="absolute inset-0 bg-AAtertiary opacity-50 rounded-full "
        ></span>
        <span className="relative">{tag}</span>
      </span>
    ));
  }

  return (
    <div className="flex flex-col max-w-3xl mx-auto font-Header text-gray-300 tracking-wider lg:py-36">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          {/* Back Button  */}
          <button
            className="text-lg text-AAsecondary rounded-lg px-4 py-2 mb-16 hover:bg-AAtertiary "
            type="button"
            onClick={() => router.push("/")}
          >
            Back
          </button>
          {/* dropdown */}
          {/* <div className="inline-block relative w-64">
            <select className="block appearance-none w-full bg-AAtertiary px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
              <option key={"_empty"} value="" selected disabled hidden>
                Select a Tag{" "}
              </option>
              {getAllTags(allPosts).map((tag) => (
                <option key={tag}>{tag}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-AAsecondary">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div> */}
          {/* Search Bar */}
          <form className="max-w-md mx-auto">
            {/* <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search for titles and tags
            </label> */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                autoComplete="off"
                id="default-search"
                className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search for titles and tags"
                required
                onChange={(e) => {
                  filterPosts(e.target.value);
                  setSearchText(e.target.value);
                  localStorage.setItem("searchText", e.target.value);
                }}
                value={searchText}
              />
              {/* <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-AAtertiary hover:bg-AAsecondary focus:outline-none focus:ring-insert font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button> */}
            </div>
          </form>

          {/* table */}
          <div className="overflow-hidden py-24 ">
            {postsToShow.length === 0 ? (
              <div></div>
            ) : (
              <>
                {/* Mobile List  */}
                <ul role="list" className="block lg:hidden divide-y divide-AAtertiary px-10">
                  {postsToShow.map((post) => (
                    <li
                      key={post.title}
                      className="flex justify-between gap-x-6 py-5"
                      
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p
                            className="text-lg font-semibold leading-6 text-gray-300 hover:cursor-pointer"
                            onClick={(e) => {
                              localStorage.setItem("searchText", searchText);
                              router.push(`/blog/${post.slug}`);
                            }}
                            >
                            {post.title}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                            {formatDate(post.date)} {' '} {formatTags(post.tags)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Desktop Table  */}
                <table className="hidden lg:block min-w-full text-left text-md font-light text-surface dark:text-white table-fixed">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Tags
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {postsToShow.map((post) => (
                      <tr
                        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-AAtertiary dark:border-white/10 "
                        key={post.title}
                      >
                        <td 
                          className="whitespace-nowrap px-6 py-4 font-medium hover:cursor-pointer"
                          onClick={(e) => {
                            localStorage.setItem("searchText", searchText);
                            router.push(`/blog/${post.slug}`);
                          }}
                          >
                          {formatDate(post.date)}
                        </td>

                        <td 
                          className=" px-6 py-4 hover:cursor-pointer"
                          onClick={(e) => {
                            localStorage.setItem("searchText", searchText);
                            router.push(`/blog/${post.slug}`);
                          }}
                          >
                          {post.title}
                        </td>

                        <td className=" px-6 py-4">
                          {formatTags(post.tags)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
