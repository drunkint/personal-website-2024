import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugsLevel2() {
  let mds = []
  for (const d of fs.readdirSync(postsDirectory)) {
    const tempdir = join(postsDirectory, d);
    let readDirResults = fs.readdirSync(tempdir);
    for (let i = 0; i < readDirResults.length; i++) {
      readDirResults[i] = join(d, readDirResults[i]);
    }
    mds = mds.concat(readDirResults);
  }
  return mds
}

export function getPostSlugs() {
  let markdownFiles = fs.readdirSync(postsDirectory);
  // console.log('!!!!' + markdownFiles)
  // for (let i = 0; i < markdownFiles.length; i++) {
  //   markdownFiles[i] = join(d, markdownFiles[i]);
  // }  
  return markdownFiles;
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
      return;
    }

    if (field === 'content') {
      items[field] = content;
      return;
    }

    if (field === 'tags') {
      items[field] = data[field].split(', ');
      return;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  // console.log(items)
  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
