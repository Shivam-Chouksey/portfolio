"use client"

import { useMenu } from "@/providers/MenuProvider";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useCallback } from "react";

export default function BackToTopButton() {

    const [showBackToTop, setShowBackToTop] = useState(false);
    const { isMenuOpen } = useMenu();

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const rect = projectsSection.getBoundingClientRect();
                setShowBackToTop(rect.top <= 0);
            } else {
                setShowBackToTop(window.scrollY > 1000);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);


    return (
        <AnimatePresence>
            {showBackToTop && !isMenuOpen && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-[4.75rem] right-6 z-[60] p-4 bg-[var(--color-text)] text-[var(--color-bg)] rounded-full shadow-xl transition-shadow duration-200 md:bottom-8 md:right-8"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}