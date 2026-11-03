
/* eslint-disable @next/next/no-img-element */

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">

      {/* HERO */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />

              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                {DATA.avatarUrl && (
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                )}
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>

          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <div className="size-10 p-2 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center font-semibold text-xs">
                      {education.school === "South Asian University" ? "SAU" : "KU"}
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>

                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground text-right flex-none">
                    {education.start} – {education.end}
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC HIGHLIGHTS */}
      <section id="achievements">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Academic Highlights</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="border rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">Academic Performance</p>
                <p className="text-sm text-muted-foreground">
                  M.Sc. in Data Science and Artificial Intelligence
                </p>
              </div>

              <span className="text-xl font-bold tabular-nums">
                9.13/10
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Cumulative GPA through the third semester.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Technical Skills</h2>
          </BlurFade>

          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, index) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 12 + index * 0.02}
              >
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section id="languages">
        <div className="flex flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Languages</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-wrap gap-2">
              {[
                "English – Business Proficiency",
                "Hindi – Native",
                "Japanese – N4 (Pursuing N3)",
              ].map((language) => (
                <div
                  key={language}
                  className="border rounded-xl px-4 py-2 text-sm font-medium"
                >
                  {language}
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>

    </main>
  );
}
