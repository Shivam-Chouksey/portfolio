import { motion } from 'motion/react';

type Capability = {
    category: string;
    desc: string;
    items: string[];
};

type Props = {
    capabilities: Capability[];
};

export default function Capabilities({ capabilities }: Props) {

    return (
        <section id="capabilities" className="mb-24 border-t border-theme pt-12">
            <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-6">
                    <h2 className="section-label">EXPERTISE & CAPABILITIES</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {capabilities.map((cap, i) => {
                        const category = cap.category;
                        const desc = cap.desc;

                        return (
                            <div key={i} className="flex flex-col gap-8 group">
                                <div className="flex flex-col gap-4">
                                    <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.2em]">
                                        0{i + 1} /
                                    </span>
                                    <h4 className="text-2xl font-medium">{category}</h4>
                                </div>

                                <p className="opacity-60 leading-relaxed font-light">{desc}</p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {cap.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 border border-theme rounded-sm text-[10px] font-bold uppercase tracking-wider hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

