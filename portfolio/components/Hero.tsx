type Props = {
    hero: HeroProps;
};

interface HeroProps {
    titleLines: string[];
    whoAmILabel: string;
    intro: string;
    subIntro?: string;
    scrollCtaLabel: string;
    scrollCtaHref: string;
}

export default function Hero({ hero }: Props) {

    return (
        <section id="home" className="min-h-[60vh] flex flex-col">
            <div className='relative flex flex-1 flex-col gap-12'>
                <div className="relative flex flex-col gap-12 min-w-0 lg:py-1">
                    <h1 className="display-title">{hero.titleLines[0] ?? ''} {hero.titleLines[1] ?? ''}</h1>

                    <div className=" flex flex-col gap-6">
                        <h2 className="section-label">{hero.whoAmILabel}</h2>
                        <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
                            {hero.intro}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
