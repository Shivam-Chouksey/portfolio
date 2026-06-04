"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'evening' | 'dark';

const THEME_STORAGE_KEY = 'portfolio-theme';

function readStoredTheme(): Theme {
    try {
        const raw = localStorage.getItem(THEME_STORAGE_KEY);
        if (raw === 'light' || raw === 'evening' || raw === 'dark') return raw;
    } catch { }
    return 'light';
}

type ThemeContextValue = {
    theme: Theme;
    onToggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
    theme: 'light',
    onToggleTheme: () => { },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => readStoredTheme());

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('evening');
        if (theme === 'evening') root.classList.add('evening');
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch { }
    }, [theme]);

    const onToggleTheme = useCallback(() => {
        setTheme((prev) => {
            if (prev === 'light') return 'evening';
            if (prev === 'evening') return 'light';
            return 'light';
        });
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, onToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
