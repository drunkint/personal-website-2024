import { getAllPosts } from "../../lib/api";
import Header from "../../components/Header/Header";
import SocialMediaArround from "../../components/Home/SocialMediaArround/SocialMediaArround";
import Footer from "../../components/Footer/Footer";
import ScreenSizeDetector from "../../components/CustomComponents/ScreenSizeDetector";
import BlogTable from "../../components/Blog/blog-table";

const formatDate = (date: string) => {
  const dateString = new Date(date).toDateString();
  const dateArrayWithoutWeek = dateString.split(' ').slice(1);
  dateArrayWithoutWeek[1] = dateArrayWithoutWeek[1] + ',';
  const dateStringWithoutWeek = dateArrayWithoutWeek.join(' ')

  return  dateStringWithoutWeek;
}


export default function Posts({ allPosts }) {
  const isProd = process.env.NODE_ENV === "production";


  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full text-gray-300">
      
      <BlogTable allPosts={allPosts} />

      {/* <SocialMediaArround finishedLoading={true} />
          test
          <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} /> */}
      {!isProd && <ScreenSizeDetector />}
    </div>
  );
};


export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags"
  ]);

  return {
    props: { allPosts },
  };
}
