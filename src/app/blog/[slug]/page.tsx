
import Link from "next/link";
import { markdownToHtml } from '@/lib/helpers';



export default async function BlogPost({ params }: { params: Promise<{ slug: string }>; }) {
    const { slug: blogName } = await params
    const blogHtml = await markdownToHtml(blogName);

    return (
        <div className="w-full max-w-lg">
            <div className="justify-items-start">
                <Link href={"/blog"}>
                    <div className="flex gap-1 items-center ">
                        <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm">Back to Blogs</p>
                    </div>
                </Link>
            </div>
            <div className="mt-5 items-center justify-items-center">
                <div dangerouslySetInnerHTML={{ __html: blogHtml }} />
            </div>
        </div>
    )
}