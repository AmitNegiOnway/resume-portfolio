
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    const featuredProject = DATA.projects.find(
        (project) => project.title === "Konbini AI Assistant"
    );

    const otherProjects = DATA.projects.filter(
        (project) => project.title !== "Konbini AI Assistant"
    );

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">

                {/* Section Heading */}
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />

                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">
                                My Projects
                            </span>
                        </div>

                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>

                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Projects & Research
                        </h2>

                        <p className="text-muted-foreground md:text-lg/relaxed text-center text-balance">
                            Explore my work in Artificial Intelligence,
                            Machine Learning, and Generative AI.
                        </p>
                    </div>
                </div>

                {/* Featured Project */}
                {featuredProject && (
                    <BlurFade delay={BLUR_FADE_DELAY * 12}>
                        <div className="max-w-[900px] mx-auto w-full">
                            <div className="mb-3">
                                <span className="text-sm font-medium text-primary">
                                    Featured Project
                                </span>
                            </div>

                            <ProjectCard
                                href={featuredProject.href}
                                title={featuredProject.title}
                                description={featuredProject.description}
                                dates={featuredProject.dates}
                                tags={featuredProject.technologies}
                                image={featuredProject.image}
                                video={featuredProject.video}
                                links={featuredProject.links}
                            />
                        </div>
                    </BlurFade>
                )}

                {/* Other Projects */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[900px] mx-auto auto-rows-fr">
                    {otherProjects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>

            </div>
        </section>
    );
}
