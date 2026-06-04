import { portfolioData } from "@/data/info";

export default function Footer() {
    return (
        <footer className="px-6 md:px-12 py-12 border-t border-theme max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
            <p className="font-mono text-[10px] opacity-40">{portfolioData.footer.designedBy}</p>
        </footer>
    );
}