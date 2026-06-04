"use client";

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useMenu } from '@/providers/MenuProvider';
import { portfolioData } from "@/data/info";


export default function MobileMenu() {

    const { isMenuOpen, setIsMenuOpen } = useMenu();


    const pageNavItems = new Set(['Blog']);

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 bg-[var(--color-bg)] flex flex-col items-center justify-center gap-8 pt-8 md:hidden z-[45]"
                >
                    {portfolioData.navItems.map((item) =>
                        pageNavItems.has(item) ? (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-4xl font-light tracking-tight hover:opacity-50 transition-opacity"
                            >
                                {item}
                            </Link>
                        ) : (
                            <Link
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-4xl font-light tracking-tight hover:opacity-50 transition-opacity"
                            >
                                {item}
                            </Link>
                        )
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

