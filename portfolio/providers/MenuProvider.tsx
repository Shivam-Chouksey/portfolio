"use client"

import React, { createContext, useContext, useState } from 'react'

type Menu = {
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type Props = {
    children: React.ReactNode
}

export const MenuContext = createContext<Menu | null>(null)

export default function MenuProvider({ children }: Props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <>
            <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
                {children}
            </MenuContext.Provider>

        </>
    )
}

export function useMenu() {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error("useMenu must be used within MenuProvider");
    }

    return context;
}