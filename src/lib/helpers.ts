import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const blogsFolder = path.join(process.cwd(), "blogs");

export function getBlogs(): Blogs[] {
    const fileNames = fs.readdirSync(blogsFolder);
    const blogsMetadata = fileNames.filter((file) => file.endsWith(".md")).map((blog) => {
        const fullPath = path.join(blogsFolder, blog);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
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
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return contentHtml;
}