import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const ARTICLES_DIR = path.join(process.cwd(), 'content/blog')

export interface ArticleFrontmatter {
  title: string
  description: string
  date: string
  category: string
  readTime: string
  published: boolean
  author: string
  tags: string[]
  ogImage?: string
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
  content: string
}

export async function getAllArticleSlugs(): Promise<string[]> {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  const files = fs.readdirSync(ARTICLES_DIR)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''))
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    content,
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const slugs = await getAllArticleSlugs()
  const articles = await Promise.all(slugs.map(getArticleBySlug))
  const valid = articles.filter(Boolean) as Article[]
  return valid.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}
