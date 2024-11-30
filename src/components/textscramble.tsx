"use client";
import React from "react";

export default function TextScramble({ textString }: { textString: string }) {
    const [text, setText] = React.useState('')
    const finalText = textString
    const chars = '!<>-_\\/[]{}—=+*^?#________abcdefghijklmnopqrstuvwxyz'

    React.useEffect(() => {
        let iteration = 0
        const interval = setInterval(() => {
            setText(() =>
                finalText
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return finalText[index]
                        }
                        return chars[Math.floor(Math.random() * chars.length)]
                    })
                    .join(''),
            )

            if (iteration >= finalText.length) {
                clearInterval(interval)
            }

            iteration += 1 / 3
        }, 30)

        return () => clearInterval(interval)
    }, [finalText])

    return (
        <div className="text-xl font-semibold tabular-nums tracking-tight">
            <div className="text-center">{text}</div>
        </div>
    )
}