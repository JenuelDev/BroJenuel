import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

const domain = "https://brojenuel.com";

const pages = [
    {
        url: domain + "/timeline",
        lastmod: "2023-02-17",
    },
    {
        url: domain + "/contact",
        lastmod: "2023-02-17",
    },
    {
        url: domain + "/my-work",
        lastmod: "2023-02-17",
    },
    {
        url: domain + "/blog",
        lastmod: "2023-02-17",
    },
];

export default defineEventHandler(async (event) => {
    // Fetch all documents
    const docs = await serverQueryContent(event).find();
    const sitemap = new SitemapStream({
        hostname: domain,
    });

    for (const page of pages) {
        sitemap.write({
            url: page.url,
            lastmod: page.lastmod,
        });
    }

    for (const doc of docs) {
        sitemap.write({
            url: doc._path,
            changefreq: doc.changefreq ? doc.changefreq : "monthly",
            lastmod: doc.lastmod ?? doc.date,
        });
    }

    sitemap.end();
    return streamToPromise(sitemap);
});
