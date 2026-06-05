"use client"

import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { projectImageKeys, projectImages } from '../assets/images';
import { useProject } from '../providers/ProjectProvider';
import Image from 'next/image';

export interface Project {
    title: string;
    desc: string;
    year: string;
    tech: string[];
    image: string;
    longDesc?: string;
}


export default function ProjectModal() {

    const { selectedProject, setSelectedProject } = useProject();

    const projectImageSrc =
        (selectedProject?.image &&
            projectImages[selectedProject.image as keyof typeof projectImages]) ||
        (projectImageKeys[0] ? projectImages[projectImageKeys[0]] : undefined);

    return (
        <AnimatePresence>
            {selectedProject && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed top-24 bottom-24 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl bg-[var(--color-bg)] z-[101] overflow-y-auto border border-theme shadow-2xl"
                    >
                        <div className="flex flex-col">
                            <div className="relative aspect-video bg-card-theme border-b border-theme flex items-center justify-center overflow-hidden">
                                {projectImageSrc && (
                                    <Image
                                        src={projectImageSrc}
                                        alt={selectedProject.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 hover:opacity-50 transition-opacity bg-card-theme rounded-full border border-theme"
                                    aria-label="Close"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8 md:p-14 flex flex-col gap-8" style={{ backgroundColor: 'bg-card-theme' }}>
                                <div className="flex justify-between items-baseline">
                                    <h2 className="text-4xl font-extrabold tracking-tight uppercase italic">
                                        {selectedProject.title}
                                    </h2>
                                    <span className="font-mono text-xs opacity-40">{selectedProject.year}</span>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h4 className="section-label text-[9px]">{selectedProject.des}</h4>
                                    <p className="text-xl font-light leading-relaxed opacity-80">
                                        {selectedProject.longDesc}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h4 className="section-label text-[9px]">{selectedProject.tech}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1.5 bg-card-theme border border-theme rounded-full text-xs font-semibold"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

