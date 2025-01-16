import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";



export default function Header() {
    return (
        <>
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Neil Patrick Villanueva</h1>
                    <p className=" text-muted-foreground">Software/AI Developer</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/drxc00" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/neil-patrick-villanueva/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:npdvillanueva@gmail.com">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </a>
                    </Button>
                </div>
            </header>
            {/* <Separator className="my-4 max-w-3xl" /> */}
            <nav className="flex gap-6 mb-12 border-b pb-4">
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                </Link>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                </Link>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                </Link>
            </nav>
        </>
    )
}