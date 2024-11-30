"use client";

import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const tabs = ['About', 'Projects', 'Blog', 'Contact'];

const Tab = ({ text, selected, setSelected }: TabProps) => {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                setSelected(text as string)
                router.push(text === 'About' ? '/' : `/${text.toLowerCase()}`)
            }}
            className={`${selected
                ? 'text-primary-foreground'
                : 'text-primary hover:text-primary '
                } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
        >
            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    layoutId="tab"
                    transition={{ type: 'spring', duration: 0.4 }}
                    className="absolute inset-0 z-0 rounded bg-primary"
                ></motion.span>
            )}
        </button>
    )
}

const ButtonShapeTabs = () => {
    const pathname = usePathname();
    const [selected, setSelected] = useState<string>(
        pathname === '/' ? 'About' : pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2)
    )

    return (
        <div className="mb-8 flex flex-wrap justify-center items-center gap-2">
            {tabs.map((tab) => (
                <Tab
                    text={tab}
                    selected={selected === tab}
                    setSelected={setSelected}
                    key={tab}
                />
            ))}
        </div>
    )
}

export default ButtonShapeTabs