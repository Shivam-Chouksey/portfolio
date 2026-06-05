type Experience = {
    company: string;
    tagline: string;
    period: string;
    position: string;
    location: string;
    industry: string;
    website: string;
    description: string[];
};

type Props = {
    experience: Experience[];
};

export default function Experience({ experience }: Props) {

    return (
        <section id="experience" className="mb-24">
            <div className="flex flex-col gap-24">
                <h2 className="section-label">EXPERIENCE</h2>
                <div className="flex flex-col gap-18">
                    {experience.map((job, i) => {
                        return (
                            <div key={i} className="flex flex-col gap-12 border-t border-theme pt-12 first:border-none first:pt-0">
                                <h3 className="text-5xl md:text-8xl font-medium tracking-tight">{job.company}</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
                                    <div className="flex flex-col gap-12">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-lg md:text-xl font-normal">{job.tagline}</p>
                                            <p className="text-lg md:text-xl font-normal opacity-60">{job.period}</p>
                                        </div>

                                        <div className="flex flex-col gap-8 text-lg font-light leading-relaxed opacity-80 max-w-xl">
                                            {job.description.map((para, idx) => (
                                                <p key={idx}>{para}</p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col pt-1">
                                        {[
                                            { label: 'Position', value: job.position },
                                            { label: 'Location', value: job.location },
                                            { label: 'Industry', value: job.industry },
                                        ].map((item, idx) => (
                                            <div key={idx} className="grid grid-cols-2 py-4 border-b border-theme last:border-none items-baseline">
                                                <span className="text-sm md:text-base opacity-40 font-light">{item.label}</span>
                                                <div className="text-right">
                                                    <span className="text-sm md:text-base font-light">{item.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

