import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import ScreenSizeDetector from "../../components/CustomComponents/ScreenSizeDetector"

// import Header from '../../components/Header/Header'
import PostHeader from "../../components/Blog/post-header";
import PostTitle from "../../components/Blog/post-title";
import PostBody from "../../components/Blog/post-body";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const isProd = process.env.NODE_ENV === "production";


  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }


  return (
    <>
      {/* <Header /> */}
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <div>
          <article className="h-full bg-AAprimary w-full ">
            <Head>
              <title>{post.title} | Angus Blog</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}

            </Head>
            
            <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                tags={post.tags}
              />
            <PostBody content={post.content} className='mb-48'/>
            {/* <SocialMediaArround finishedLoading={true} />
                  test
                  <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} /> */}
            {!isProd && <ScreenSizeDetector />}
          </article>
        </div>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {

  const post = getPostBySlug(params.slug[0], [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    'tags',
  ]);

  // Level 2 code
  // const post = getPostBySlug(params.slug[0] + "/" + params.slug[1], [
  //   "title",
  //   "date",
  //   "slug",
  //   "author",
  //   "content",
  //   "ogImage",
  //   "coverImage",
  //   'tags',
  // ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      let temp = post.slug;
      const ps = temp.split("/");
      return {
        params: {
          slug: ps,
        },
      };
    }),
    fallback: false,
  };
}
