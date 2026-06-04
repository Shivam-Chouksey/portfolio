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

                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            onMouseEnter={() => setIsLangOpen(true)}
                            className="flex items-center gap-2 px-3 py-1.5 border border-theme rounded-full hover:bg-card-theme transition-all duration-300 group"
                        >
                            <Image
                                src={`https://flagsapi.com/${portfolioData.languages.find((l) => l.code === currentLang)?.flag
                                    }/flat/64.png`}
                                alt={currentLang}
                                width={16}
                                height={16}
                                className="rounded-sm"
                                loading="lazy"
                                unoptimized
                            />
                            <span className="font-mono text-[10px] font-bold tracking-widest">{currentLang}</span>
                            <ChevronDown
                                size={10}
                                className={`opacity-40 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                    onMouseLeave={() => setIsLangOpen(false)}
                                    className="absolute top-full right-0 mt-2 py-1.5 bg-[var(--color-bg)] border border-theme shadow-2xl z-[60] min-w-[150px] rounded-lg overflow-hidden backdrop-blur-md"
                                >
                                    {portfolioData.languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setCurrentLang(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-card-theme transition-colors group relative ${currentLang === lang.code ? 'bg-card-theme/30' : ''
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={`https://flagsapi.com/${lang.flag}/flat/64.png`}
                                                    alt={lang.label}
                                                    width={16}
                                                    height={16}
                                                    className={`rounded-sm transition-transform duration-300 ${currentLang === lang.code
                                                        ? 'scale-110'
                                                        : 'opacity-60 group-hover:opacity-100'
                                                        }`}
                                                    loading="lazy"
                                                    unoptimized
                                                />
                                                <span
                                                    className={`text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${currentLang === lang.code
                                                        ? 'translate-x-1 text-[var(--color-text)]'
                                                        : 'opacity-40 group-hover:opacity-100'
                                                        }`}
                                                >
                                                    {lang.label}
                                                </span>
                                            </div>
                                            {currentLang === lang.code && (
                                                <motion.div layoutId="active-lang-indicator" className="relative">
                                                    <motion.div
                                                        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.2, 0.4] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                                        className="absolute inset-0 bg-[var(--color-text)] rounded-full blur-[2px]"
                                                    />
                                                    <div className="w-1 h-1 rounded-full bg-[var(--color-text)]" />
                                                </motion.div>
                                            )}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>


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