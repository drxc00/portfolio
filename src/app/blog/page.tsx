"use client";
import { motion } from "motion/react";
import { GrDocumentMissing } from "react-icons/gr";

export default function Blog(): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }} // Start transparent and below
            animate={{ opacity: 1, y: 0 }} // Fade in and move to position
            transition={{ delay: 0.1, duration: 0.5 }} // Same transition for all
            className="flex flex-col items-center mt-10 justify-center space-y-5">
            <GrDocumentMissing className="w-8 h-8" />
            <div className="text-center">
                <h1 className="text-lg font-semibold italic">There is nothing here yet! Should I start blogging?</h1>
                <p className="text-base italic">Check back later!</p>
            </div>
        </motion.div>
    );
}