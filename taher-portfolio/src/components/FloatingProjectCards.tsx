
"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Ayar Gold",
    category: "Mobile App",
    image: "/projects/ayar-gold.png",
    position: "left-[1%] top-[20%]",
    href: "https://apps.apple.com/in/app/ayar-24-%D8%B9%D9%8A%D8%A7%D8%B1-%D9%A2%D9%A4/id6756250412",
  },
  {
    name: "H&S Store",
    category: "E-commerce",
    image: "/projects/hs-store.png",
    position: "right-[1%] top-[20%]",
    href: "https://hsstore.com/",
  },
  {
    name: "Tellgo",
    category: "Travel Tech",
    image: "/projects/tellgo.png",
    position: "left-[1%] bottom-[13%]",
    href: "https://webapp.tellgo.org/",
  },
  {
    name: "Saree Express",
    category: "Commerce",
    image: "/projects/clapper.png",
    position: "right-[1%] bottom-[13%]",
    href: "https://apps.apple.com/us/app/saree-express/id6777646646",
  },
  {
    name: "KFG",
    category: "AI & Chatbot",
    image: "/projects/kfg.png",
    position: "left-1/2 top-[2%] -translate-x-1/2",
    href: "https://apps.apple.com/us/app/kout-gpt/id6790105375",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${project.name} project (opens in a new tab)`}
      className="group block min-w-0 rounded-2xl border border-neutral-200 bg-white p-2.5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#d8c29e] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b7135] sm:p-3"
    >
      <div className="relative aspect-[1.45/1] overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          fill
          sizes="(max-width: 639px) 72vw, 220px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex min-w-0 items-center justify-between gap-1 px-1 pb-1 pt-3">
        <div className="min-w-0">
          <h3 className="truncate text-xs font-semibold text-neutral-900 sm:text-sm">
            {project.name}
          </h3>
          <p className="mt-1 truncate text-[10px] text-neutral-500">
            {project.category}
          </p>
        </div>
        <ArrowUpRight size={15} className="shrink-0 text-[#a47b3f]" />
      </div>
    </a>
  );
}

export default function FloatingProjectCards() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        "(min-width: 640px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray<HTMLElement>(
            ".desktop-project-card",
          );

          cards.forEach((card, index) => {
            gsap.to(card, {
              y: index % 2 === 0 ? -9 : 9,
              duration: 2.5 + index * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.12,
            });
          });

          gsap.from(".orbit-ring", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
          });
        },
      );

      return () => media.revert();
    },
    { scope: container },
  );

  return (
    <div ref={container} className="w-full">
      {/* Desktop orbit */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[540px] sm:block">
        <div className="orbit-ring absolute inset-[12%] rounded-full border border-neutral-300/70" />
        <div className="orbit-ring absolute inset-[23%] rounded-full border border-dashed border-neutral-300/80" />

        <div className="absolute inset-[32%] z-10 flex flex-col items-center justify-center rounded-full border border-neutral-200 bg-white/95 p-3 text-center shadow-lg shadow-neutral-900/5">
          <div className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-[#f5eddf] text-[#9b7135]">
            <Sparkles size={19} />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Full-stack developer
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-neutral-900">
            Build.
            <br />
            Create.
            <br />
            Launch.
          </h2>
        </div>

        {projects.map((project) => (
          <div
            key={project.name}
            className={`desktop-project-card absolute z-20 w-[34%] max-w-[168px] ${project.position}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Mobile and small tablet layout */}
      <div
        className="mobile-project-strip flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 sm:hidden"
        aria-label="Featured projects. Swipe horizontally to explore."
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className="mobile-project-card w-[72vw] max-w-[270px] shrink-0 snap-start"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400 sm:mt-5">
        <Sparkles size={13} className="text-[#b88b4a]" />
        <span className="sm:hidden">Swipe to explore selected work</span>
        <span className="hidden sm:inline">A little look at what I create</span>
      </p>
    </div>
  );
}
