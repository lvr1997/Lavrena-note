import { ContentData, createContentLoader } from "vitepress";

declare const data: ContentData[];
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
      date: frontmatter.date
    }))
    .sort((a, b) => b.date.time - a.date.time)
  }
});