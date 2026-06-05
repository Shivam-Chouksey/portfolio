import { portfolioData } from "@/data/info";

export default function Footer() {
    return (
        <footer className="px-12 py-6 ">
            <p className="font-mono text-[10px] opacity-40">{portfolioData.footer.designedBy}</p>
        </footer>
    );
}