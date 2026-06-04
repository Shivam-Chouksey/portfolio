'use client'

import { House } from "lucide-react";
import { useMenu } from "@/providers/MenuProvider";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {

    const { isMenuOpen } = useMenu();

    const pathName = usePathname();
    const isActive = pathName === '/';

    return (
        <>
            {!isMenuOpen && <nav
                className="md:hidden fixed bottom-0 left-0 right-0 z-[48] flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none"
                aria-label="Primary"
            >
                <div className="pointer-events-auto relative flex w-full max-w-[158px] items-stretch rounded-full bg-[var(--color-bg)]/95 p-1 shadow-[0_5px_20px_rgba(0,0,0,0.12)] backdrop-blur-md dark:bg-[var(--color-card-bg)]/95 dark:shadow-[0_5px_22px_rgba(0,0,0,0.45)]">
                    <motion.div
                        className="pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-[var(--color-text)] shadow-sm"
                        initial={false}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.6 }}
                    />
                    <Link
                        href="/"
                        className={`relative z-10 flex flex-1 flex-col items-center justify-center gap-px py-1.5 transition-colors duration-300 ${isActive
                            ? 'text-[var(--color-bg)]'
                            : 'text-[var(--color-text-secondary)] opacity-65'
                            }`}
                    >
                        <House size={16} strokeWidth={2} aria-hidden />
                        <span className="text-[7px] font-bold uppercase tracking-[0.16em]">Home</span>
                    </Link>
                </div>
            </nav>
            }
        </>
    )
}