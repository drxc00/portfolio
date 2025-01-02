"use client";

import { Timeline } from "@/components/educ-timeline";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const education = [
  {
    duration: "2023 - 2025",
    headline: "Founding Member",
    institution: "Google Developer Student Club - MAPUA University",
    details: "",
  },
  {
    duration: "2022 - 2025",
    headline: "Bachelor of Science in Computer Science",
    institution: "MAPUA University",
    details: "Majoring in Artificial Intelligence",
  },
];

const technicalSkills = [
  "Python",
  "Java",
  "C++",
  "JavaScript/TypeScript",
  "AWS",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Scikit-learn",
  "PyTorch",
  "TensorFlow",
];

export default function Home(): JSX.Element {
  return (
    <>
      <motion.div className="space-y-14">
        <motion.div
          className="max-w-2xl space-y-2"
          initial={{ opacity: 0, y: 40 }} // Start transparent and below
          animate={{ opacity: 1, y: 0 }} // Fade in and move to position
          transition={{ delay: 0.1, duration: 0.5 }} // Same transition for all
        >
          <p>
            <span className="font-semibold">
              Hi, I&apos;m Neil
            </span>
            , and I love building things with code.
            I&apos;m currently pursuing a Bachelor of Science in Computer Science, majoring in Artificial Intelligence.
            I&apos;m eager to apply my knowledge and skills to a challenging role in both software development and machine learning.
            I&apos;m particularly interested in natural language processing, computer vision, and software engineering.
            I&apos;m excited to contribute to innovative projects that leverage AI to solve real-world problems.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} // Same transition for all
        >
          <h3 className="text-lg font-semibold">Technical Skills</h3>
          <div className="mt-3 max-w-2xl gap-2 flex flex-wrap">
            {technicalSkills.map((skill, index) => (
              <Badge
                className="border-primary cursor-pointer bg-card text-primary hover:bg-card/90"
                key={index}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }} // Same transition for all
        >
          <h3 className="text-lg font-semibold">Education & Experience</h3>
          <Timeline entries={education} />
        </motion.div>
      </motion.div>
    </>
  );
}
