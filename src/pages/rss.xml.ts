import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const blogs = (await getCollection("blog")).filter((b) => !b.data.draft);
  const notes = (await getCollection("notes")).filter((n) => !n.data.draft);
  const algorithms = (await getCollection("algorithms")).filter((a) => !a.data.draft);

  const items = [...blogs, ...notes, ...algorithms]
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/${entry.collection}/${entry.slug}`,
    }));

  return rss({
    title: "MyWeb",
    description: "个人学习笔记、算法笔记与博客",
    site: context.site,
    items,
  });
}
