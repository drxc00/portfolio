import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function Contact() {
    return (
        <section id="contact" className="mb-16">
            <Card className="p-8 text-center shadow-none rounded-sm">
                <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                    I&apos;m always open to discussing new projects and opportunities.
                </p>
                <Button asChild>
                    <a href="mailto:npdvillanueva@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Send me an email
                    </a>
                </Button>
            </Card>
        </section>
    )
}