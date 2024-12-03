
import { MotionDiv } from "@/components/use-motion";
import { getBlogs } from "@/lib/helpers";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { GrDocumentMissing } from "react-icons/gr";

export default function Blog(): JSX.Element {

    const blogs: Blogs[] = getBlogs();

    return (
        <div className="w-full max-w-lg">
            {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }} // Start transparent and below
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index / (blogs.length + 1), duration: 0.5 }}
                        key={index}
                        className="border p-5 rounded bg-secondary/30"
                    >

                        <div className="space-y-1">
                            <div className="flex mx-auto justify-between">
                                <h2 className="text-2xl font-semibold ">{blog.title}</h2>
                                <div className="flex text-sm gap-1 items-center p-1 border rounded cursor-pointer bg-muted text-muted-foreground hover:bg-muted/90">
                                    <CalendarIcon className="w-4 h-4 mr-1" />
                                    <p>{blog.datePosted}</p>
                                </div>
                            </div>

                            <p className="text-foreground/80 text-base">{blog.description}</p>
                            <Link
                                href={"/blog/" + blog.path}
                                className="inline-flex items-center text-sm font-medium"
                            >
                                Read
                                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </MotionDiv >
                ))
            ) : (
                <MotionDiv
                    initial={{ opacity: 0, y: 10 }} // Start transparent and below
                    animate={{ opacity: 1, y: 0 }
                    } // Fade in and move to position
                    transition={{ delay: 0.1, duration: 0.5 }} // Same transition for all
                    className="flex flex-col items-center mt-10 justify-center space-y-5" >
                    <GrDocumentMissing className="w-8 h-8" />
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">There is nothing here yet! Should I start blogging?</h1>
                        <p className="text-base">Check back later!</p>
                    </div>

                </MotionDiv >
            )
            }
        </div>
    )
}