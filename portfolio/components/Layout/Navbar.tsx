"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "@/providers/ThemeProvider";
import { portfolioData } from "@/data/info";
import { EveningIcon, SunIcon } from '././ThemeIcons';
import { useMenu } from "@/providers/MenuProvider";


export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)
    const { theme, onToggleTheme } = useTheme();
    const { isMenuOpen, setIsMenuOpen } = useMenu()
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(() => {
        const stored = localStorage.getItem('lang');
        if (stored) return stored;
        return portfolioData.languages[0]?.code ?? 'EN';
    });

    const pageNavItems = new Set(['Blog']);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${isScrolled && !isMenuOpen
                    ? 'bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-theme shadow-sm py-4'
                    : 'bg-transparent py-8'
                    }`}
            >
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="z-50 min-w-[120px]">
                    <AnimatePresence mode="wait">
                        {isScrolled ? (
                            <motion.div
                                key="name"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                            >
                                <Link
                                    href="/"
                                    className="font-bold text-xs uppercase tracking-widest hover:opacity-50 transition-all block"
                                >
                                    {portfolioData.person.name}
                                </Link>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </motion.div>

                <div className="flex items-center gap-8">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hidden md:flex gap-8">
                        {portfolioData.navItems.map((item) =>
                            pageNavItems.has(item) ? (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="section-label hover:text-[var(--color-text)] transition-colors"
                                >
                                    {item}
                                </Link>
                            ) : (
                                <Link
                                    key={item}
                                    href={`/#${item.toLowerCase()}`}
                                    className="section-label hover:text-[var(--color-text)] transition-colors"
                                >
                                    {item}
                                </Link>
                            )
                        )}
                    </motion.div>

                    <button
                        onClick={onToggleTheme}
                        className="p-2 hover:opacity-50 transition-opacity z-50 flex items-center justify-center"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' && <SunIcon />}
                        {theme === 'evening' && <EveningIcon />}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className="md:hidden p-2 hover:opacity-50 transition-opacity z-50"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
        </>
    )
}