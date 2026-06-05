"use client"

import React, { createContext, useContext, useState } from 'react'
import { Project } from '../components/ProjectModal';

type ProjectContextType = {
    selectedProject: Project | null;
    setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

const projectContext = createContext<ProjectContextType | null>(null);

export default function ProjectProvider({ children }: { children: React.ReactNode }) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)


    return (
        <projectContext.Provider value={{ selectedProject, setSelectedProject }}>
            {children}
        </projectContext.Provider>
    )
}


export function useProject() {
    const context = useContext(projectContext);

    if (!context) {
        throw new Error("useProject must be used within ProjectProvider");
    }

    return context;
}