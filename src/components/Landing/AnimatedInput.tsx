"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RiRobot2Line } from "react-icons/ri";

const placeholderTexts = [
    "Explore our AI",
    "Your AI agent: How can I help?",
    "Optimize your workflows",
    "Advanced data analytics"
];

const AnimatedInput = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        // Run the animation only if the user is not typing or focused on the input
        if (isFocused || inputValue !== "") return;

        const currentText = placeholderTexts[textIndex];

        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayText("");
                setTextIndex((prev) => (prev + 1) % placeholderTexts.length);
            }, 1500);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, textIndex, isFocused, inputValue]);

    return (
        <div className="flex flex-wrap items-center justify-center m-6">
            <div className="bg-zinc-900 border border-purple-950 rounded-lg px-4 py-4 space-x-4 flex items-center">
                <RiRobot2Line
                    size={40}
                    className="text-white bg-gradient-to-r p-2 from-purple-600 to-blue-600 rounded-full"
                />
                <motion.input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full max-w-md px-3 py-3 text-white bg-zinc-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={displayText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
};

export default AnimatedInput;
