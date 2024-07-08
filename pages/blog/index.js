import { getAllPosts } from "../../lib/api";
import Header from "../../components/Header/Header";
import SocialMediaArround from "../../components/Home/SocialMediaArround/SocialMediaArround";
import Footer from "../../components/Footer/Footer";
import ScreenSizeDetector from "../../components/CustomComponents/ScreenSizeDetector";

const Posts = ({ allPosts }) => {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      try hi/test
      {/* <SocialMediaArround finishedLoading={true} />
          test
          <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} /> */}
      {!isProd && <ScreenSizeDetector />}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
