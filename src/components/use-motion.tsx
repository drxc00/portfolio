"use client";
import { motion } from "motion/react";
import React, { HTMLAttributes } from "react";

const Component = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);

Component.displayName = "MotionDiv";


export const MotionDiv = motion.create(Component);