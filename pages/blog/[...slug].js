import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
        {router.isFallback ? (
          <div>loading</div>
        ) : (
          <>
            <div>
              {post.title}
              {post.content}
            </div>
          </>
        )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug[0] + '/' + params.slug[1], [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      let temp = post.slug;
      const ps = temp.split('/')
      return {
        params: {
          slug: ps
        },
      }
    }),
    fallback: false,
  }
}
