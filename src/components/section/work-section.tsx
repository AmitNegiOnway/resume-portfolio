
"use client";

import { DATA } from "@/data/resume";

export default function WorkSection() {
  if (DATA.work.length === 0) {
    return null;
  }

  return (
    <section className="w-full">
      {DATA.work.map((work) => (
        <div key={work.company} className="mb-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold">{work.company}</h3>
              <p className="text-sm text-muted-foreground">
                {work.title}
              </p>
            </div>

            <span className="text-xs text-muted-foreground">
              {work.start} - {work.end || "Present"}
            </span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            {work.description}
          </p>
        </div>
      ))}
    </section>
  );
}
