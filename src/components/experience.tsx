import { Card } from "./ui/card";

export function Experience({ education }: { education: any }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Education & Experience</h2>
            <div className="space-y-8">
                {education.map((item: any, index: any) => (
                    <Card key={index} className="p-6 shadow-none rounded-sm">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-semibold">{item.headline}</h3>
                                <p className="text-muted-foreground">{item.institution}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{item.duration}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
