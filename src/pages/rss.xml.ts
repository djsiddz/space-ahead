import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { withBase } from "../utils/helpers";
import { getCollection } from "astro:content";
import siteConfig from "../site.config";

export async function GET(context: APIContext) {
  const blog = await getCollection("blogs");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site + withBase("/"),
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: withBase(`/blog/${post.id}/`),
    })),
    customData: `<language>en-US</language>`,
    stylesheet: withBase("/pretty-feed-v3.xsl"),
  });
}
