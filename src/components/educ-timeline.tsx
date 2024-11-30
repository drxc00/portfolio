
interface EducationEntry {
    duration: string;
    headline: string;
    institution: string;
    details: string;
}

interface TimelineProps {
    entries: EducationEntry[]
}

export function Timeline({ entries }: TimelineProps) {
    return (
        <div className="justify-items-center">
            <div className="flex flex-col gap-8 mt-5">
                {entries.map((entry, index) => (
                    <div key={index} className="relative pl-6">
                        {/* Dot */}
                        <div className="absolute left-0 top-[0.6rem] w-2 h-2 bg-primary rounded" />

                        {/* Vertical line */}
                        {index !== entries.length - 1 && (
                            <div className="absolute left-[0.2rem] top-[1rem] w-[1px] h-[calc(100%+2rem)] bg-foreground" />
                        )}

                        {/* Content */}
                        <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">{entry.duration}</span>
                            <span className="text-base font-medium">{entry.headline}</span>
                            <span className="text-sm text-foreground">{entry.institution}</span>
                            <span className="text-sm text-muted-foreground italic">{entry.details}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
