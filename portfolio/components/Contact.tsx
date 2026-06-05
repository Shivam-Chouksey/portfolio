import Link from 'next/link';

type ContactLink = Readonly<{ label: string; href: string }>;

type Props = {
    email: string;
    links: readonly ContactLink[];
};

export default function ContactSection({ email, links }: Props) {
    return (
        <section id="contact" className="mb-24">
            <div className="flex flex-col gap-16" >
                <h2 className="section-label">CONNECT</h2>

                <div className="flex flex-col gap-12">
                    <a href={`mailto:${email}`} className="text-3xl md:text-5xl font-light tracking-tight hover:opacity-50 cursor-pointer transition-opacity break-all">
                        {email}
                    </a>

                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs font-semibold uppercase tracking-widest border-b border-transparent hover:border-[var(--color-text)] transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

