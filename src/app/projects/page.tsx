"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code2Icon, Link2 } from "lucide-react";
import { CgUnavailable } from "react-icons/cg";
import Link from "next/link";
import { motion } from "motion/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGithub } from "react-icons/fa";
import TextScramble from "@/components/textscramble";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        name: "booklyai",
        technologyStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma", "Auth.js", "AWS Lambda", "AWS S3"],
        description: "A web application that turn your ideas into polished ebooks in minutes using AI. "
            + "It features user authentication and authorization, automated ebook generation, and integrated payment processing.",
        source: "https://github.com/drxc00/booklyai",
        isSourcePublic: true,
        isWebApp: true,
        webLink: "https://booklyai.net/"
    },
    {
        name: "MentorMatch",
        technologyStack: ["React", "Next.js", "TypeScript", "Mongoose", "MongoDB", "Next-Auth.js"],
        description: "A web application developed for the MAPUA University's Center for Student Advising (CSA) to streamline and enhance the peer mentoring process. It features user authentication and authorization, automated schedule assignments, integrated communication tools, and comprehensive management functionalities.",
        source: "https://github.com/drxc00/mentor-match-public",
        isSourcePublic: true,
        isWebApp: true,
        webLink: "https://www.mentormatch.online/"
    },
    {
        name: "SteamBud",
        technologyStack: ["Python", "Discord.py", "CheapSharkAPI"],
        description: "SteamBud is a Discord bot designed to facilitate the search for video game deals using the powerful CheapSharkAPI.",
        source: "https://github.com/drxc00/SteamBud-Bot",
        isSourcePublic: true,
        isWebApp: false,
        webLink: ""
    },
    {
        name: "random_filipino_api",
        technologyStack: ["Python", "Flask", "Flask-RESTful", "SQLite", "SQLAlchemy"],
        description: "An API to generate random Filipino user data for testing and mock data creation. It provides endpoints for retrieving randomized names, addresses, phone numbers, and other personal details, with options to customize results by size and gender.",
        source: "https://github.com/drxc00/random_filipino_api",
        isSourcePublic: true,
        isWebApp: false,
        webLink: ""
    },
];

export default function Projects() {
    return (
        <>
            <div className="w-full max-w-2xl">
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }} // Start transparent and below
                            animate={{ opacity: 1, y: 0 }} // Fade in and move to position
                            transition={{ delay: index / (projects.length + 1), duration: 0.5 }} // Same transition for all
                        >
                            <Card className="w-full bg-zinc-100 border-primary flex justify-between ">
                                <CardContent className="mt-6 space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="space-y-1">
                                            <div>
                                                <div className="flex gap-2 text-foreground">
                                                    {/* <h1 className="text-xl font-semibold">{project.name}</h1> */}
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild className="cursor-pointer">
                                                                <Link href={project.source} target="_blank">
                                                                    <div className="flex flex-col items-center rounded border border-primary p-2 bg-card text-primary">
                                                                        <Code2Icon className="w-3 h-3" />
                                                                    </div>
                                                                </Link>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="rounded">
                                                                {project.isSourcePublic ? (
                                                                    <div className="flex items-center gap-1 border border-primary text-primary">
                                                                        <FaGithub />
                                                                        <p>Check out the source code.</p>
                                                                    </div>
                                                                ) : (
                                                                    <div className="flex items-center gap-1 border border-primary text-primary">
                                                                        <CgUnavailable />
                                                                        <p>Source code is private. Deployed version only.</p>
                                                                    </div>
                                                                )}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                    {project.isWebApp && (
                                                        <div>
                                                            <Link href={project.webLink} target="_blank">
                                                                <div className="flex flex-col items-center rounded border p-2 bg-card text-primary border-primary">
                                                                    <Link2 className="w-3 h-3" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )}
                                                    <TextScramble textString={project.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mt-5 gap-2 text-sm text-foreground flex flex-wrap w-full ">
                                                    {project.technologyStack.map((stack, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: 10 }} // Start transparent and below
                                                            animate={{ opacity: 1, x: 0 }} // Fade in and move to position
                                                            transition={{ delay: index / (project.technologyStack.length + 1), duration: 0.3 }} // Same transition for all
                                                        >
                                                            <Badge
                                                                className="border-primary cursor-pointer bg-card text-foreground hover:bg-card/90"
                                                            >
                                                                {stack}
                                                            </Badge>
                                                        </motion.div>

                                                    )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-justify">{project.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>

    );
}