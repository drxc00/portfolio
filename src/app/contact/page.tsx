"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";

export default function Contact() {
    return (
        <motion.div
            className="max-w-2xl text-center space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.5 }}
        >
            <h1 className="text-xl font-bold">Let’s Build Something Amazing Together!</h1>
            <p className="text-base">
                Whether you have a project in mind, a collaboration opportunity, or just want to connect, I’d love to hear from you.
                Feel free to reach out, and let’s turn great ideas into impactful results!
            </p>
            <div className="flex gap-4 justify-center">
                <Link href="https://www.linkedin.com/in/neil-patrick-villanueva/" target="_blank">
                    <IoLogoLinkedin className="w-6 h-6" />
                </Link>
                <Link href="mailto:npdvillanueva@gmail.com" target="_blank">
                    <MdAttachEmail className="w-6 h-6" />
                </Link>
            </div>
        </motion.div>
    );
}