"use client";

import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Badge } from "@/components/ui/badge";
import { Contact } from "@/components/contact";
import { education, projects, technicalSkills } from "@/lib/data";

export default function Home(): JSX.Element {
  return (
    <>
      <section id="about" className="mb-16 space-y-12">
        <div className="dark:prose-invert max-w-none">
          <p className="leading-relaxed text-justify">
            <span className="font-semibold">
              Hi, I&apos;m Neil
            </span>
            , and I love building things with code.
            I&apos;m currently pursuing a Bachelor of Science in Computer Science, majoring in Artificial Intelligence.
            I&apos;m eager to apply my knowledge and skills to a challenging role in both software development and machine learning.
            I&apos;m particularly interested in natural language processing, computer vision, and software engineering.
            I&apos;m excited to contribute to innovative projects that leverage AI to solve real-world problems.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="mt-3 gap-2 flex flex-wrap">
            {technicalSkills.map((skill, index) => (
              <Badge
                variant="outline"
                className="cursor-default px-2 py-1"
                key={index}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Experience */}
        <Experience education={education} />
      </section>

      <Projects projects={projects as typeof projects} />
      <Contact />
    </>
  );
}
