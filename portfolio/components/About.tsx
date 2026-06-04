type Props = {
    about: AboutProps;
}

interface AboutProps {
    sectionLabel: string;
    headline: string;
    focusAreas: string[];
    paragraphs: string[];
}


export function About({ about }: Props) {

    return (
        <section id="about" className="mb-24 pt-8 md:pt-12">
            <div>
                <h2 className="section-label mb-12">{about.sectionLabel}</h2>
                <div className="w-full h-[1px] bg-theme mb-12 md:mb-24 opacity-20" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div className="flex flex-col justify-between gap-12 lg:gap-24">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight max-w-2xl">
                            {about.headline}
                        </h3>
                    </div>

                    <div className="flex flex-col gap-6 md:gap-8 text-lg md:text-xl opacity-80 font-light leading-relaxed">
                        {about.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

