import { createContentLoader } from "vitepress";

console.log("Script started"); // 确保脚本被执行

interface Post {  // ts定义数据类型
  title: string;
  url: string;
  tags: [];
  date: DateInfo;
  excerpt: string | undefined;
}

interface DateInfo {  // ts定义数据类型
  time: number;
  string: string;
}

declare const data: Post[];

export { data, type Post };

export default createContentLoader("posts/essay/*.md", {// 扫描文件的目录
  // excerpt: true, //解析包含摘录
  transform(raw): Post[] {
    // console.log("Raw data:", raw); // 输出原始数据
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        if (!frontmatter) {
          // console.warn(`No frontmatter found for ${url}`); 
          return null; // 忽略没有 frontmatter 的文件  
        }
        const { title, date } = frontmatter;

        if (!title || !date) {
          // console.warn(`Incomplete frontmatter in ${url}:`, frontmatter);
          return null; // 忽略缺少必要字段的文件
        }
        return {
          title,
          url,
          excerpt,
          tags: frontmatter.tags || [],
          date: formatDate(date),
        };
      })
      .filter((post): post is Post => post !== null) // 过滤掉无效的条目
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string): DateInfo {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}