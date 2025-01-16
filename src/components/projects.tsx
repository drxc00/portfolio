import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
    name: string;
    description: string;
    technologyStack: string[];
    source: string;
}

export function Projects({ projects }: { projects:  Project[] }) {
    return (
        <section id="projects" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project: any, index: any) => (
                    <Card key={index} className="p-6 shadow-none rounded-sm cursor-pointer">
                        <h3 className="font-semibold flex items-center gap-2 mb-2">
                            {project.name}
                            <a href={project.source} className="text-muted-foreground hover:text-foreground">
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 text-justify">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologyStack.map((tech: string, index: number) => (
                                <Badge variant="outline" key={index}>{tech}</Badge>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
