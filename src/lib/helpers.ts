import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import addClass from 'rehype-class-names';
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";


const blogsFolder = path.join(process.cwd(), "blogs");

export function getBlogs(): Blogs[] {
    const fileNames = fs.readdirSync(blogsFolder);

    // filters all the blogs in the /blogs folder.
    // uses matter lib to extract the metadata.
    const blogsMetadata = fileNames.filter((file) => file.endsWith(".md")).map((blog) => {
        const fullPath = path.join(blogsFolder, blog);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        // returns the matter metadata and a reference to the blog fileName
        return {
            ...matterResult.data,
            path: blog.replace(".md", ""),
        }
    });
    return blogsMetadata as Blogs[];

}

export async function markdownToHtml(markdown: string): Promise<string> {
    const blogPath = path.join(process.cwd(), "blogs", `${markdown}.md`);

    const blogContent = fs.readFileSync(blogPath, 'utf8');

    const matterResult = matter(blogContent);

    const processedContent = await remark()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(addClass, {
            h1: "text-2xl font-bold",
            h2: "text-xl font-bold",
            h3: "text-lg font-bold",
            h4: "text-md font-bold",
            h5: "text-sm font-bold",
            h6: "text-xs font-bold",
            p: "text-base",
            li: "text-base",
            ol: "text-base",
            ul: "text-base",
            a: "text-base",
        })
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return `<div class="space-y-4">${contentHtml}</div>`;
}