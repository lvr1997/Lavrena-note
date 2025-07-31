import { createContentLoader } from "vitepress";

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
}

declare const data: Post[];
export { data };

export default createContentLoader('essay/*.md', {
  includeSrc: true,
  render: false,
  excerpt: false,
  transform(rawData) {
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
    }).map(({ url, frontmatter, excerpt }) => ({
      title: frontmatter.title,
      url,
      excerpt,
      date: formatDate(frontmatter.date)
    }))
    .sort((a, b) => b.date.time - a.date.time)
  }
});

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}