"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();

    const toggleLocale = () => {
        const next = locale === "en" ? "hi" : "en";
        document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
        router.refresh();
    };

    return (
        <button
            onClick={toggleLocale}
            className="px-2 py-1 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Switch language"
        >
            {locale === "en" ? "हिंदी" : "EN"}
        </button>
    );
}
