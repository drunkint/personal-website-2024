import { MetadataRoute } from 'next'
import { getAllPosts } from './lib/api';
 
export default function sitemap({ allPosts }): MetadataRoute.Sitemap {
  const blogSiteMapArray = allPosts.map(post => (
    {
      url: `https://angusleehs.me/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }
  ));

  const mainPagesArary = [{
    url: 'https://angusleehs.me/',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: 'https://angusleehs.me/blog',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://angusleehs.me/blog',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }]


  return blogSiteMapArray.concat(...mainPagesArary);
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug'
  ]);

  return {
    props: { allPosts },
  };
}