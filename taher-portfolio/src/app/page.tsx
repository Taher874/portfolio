"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import FloatingProjectCards from "@/components/FloatingProjectCards";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    name: "Ayar 24 Gold",
    category: "Mobile Application",
    description:
      "A gold-focused mobile experience designed to make pricing, account access, and gold-related services easier to navigate.",
    image: "/projects/ayar-gold.png",
    technologies: ["React Native", "TypeScript", "API Integration"],
    href: "https://ayar24.co/",
    accent: "from-amber-100/80 to-orange-50",
  },
  {
    number: "02",
    name: "Tellgo eSIM",
    category: "Travel Technology",
    description:
      "A mobile eSIM experience that helps travelers explore connectivity options and manage their digital travel needs.",
    image: "/projects/tellgo.png",
    technologies: ["React Native", "REST APIs", "Mobile UI"],
    href: "https://webapp.tellgo.org/",
    accent: "from-sky-100/80 to-indigo-50",
  },
  {
    number: "03",
    name: "H&S Store",
    category: "E-commerce Platform",
    description:
      "A modern shopping experience with product discovery, category navigation, cart functionality, and checkout flows.",
    image: "/projects/hs-store.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    href: "https://hsstore.com/",
    accent: "from-yellow-100/80 to-amber-50",
  },
  {
    number: "04",
    name: "Saree Express",
    category: "Commerce & Logistics",
    description:
      "A customer and provider-focused experience built around product browsing, order journeys, and delivery workflows.",
    image: "/projects/clapper.png",
    technologies: ["React Native", "API Integration", "UI/UX"],
    href: "https://apps.apple.com/us/app/saree-express/id6777646646",
    accent: "from-rose-100/80 to-pink-50",
  },
  {
    number: "05",
    name: "KFG Chatbot",
    category: "AI & Automation",
    description:
      "A chatbot-oriented project focused on making digital interactions more accessible through conversational interfaces.",
    image: "/projects/kfg.png",
    technologies: ["React", "AI Integration", "APIs"],
    href: "https://apps.apple.com/us/app/kout-gpt/id6790105375",
    accent: "from-violet-100/80 to-fuchsia-50",
  },
];

const services = [
  {
    number: "01",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with polished interfaces, API integrations, and thoughtful user journeys.",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    description:
      "Responsive websites and modern web applications built for usability, maintainability, and performance.",
    tags: ["Next.js", "React.js", "TypeScript"],
  },
  {
    number: "03",
    icon: Braces,
    title: "Backend & API Development",
    description:
      "Reliable application services, API integrations, authentication flows, and data-driven features.",
    tags: [".NET", "REST APIs", "MongoDB"],
  },
  {
    number: "04",
    icon: Layers3,
    title: "UI/UX & Product Design",
    description:
      "Clear user flows and clean interface concepts that connect product requirements with useful experiences.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
];

const technologies = [
  "React Native",
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  ".NET",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "GSAP",
  "Figma",
  "Git",
  "Expo",
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f6] text-neutral-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#faf9f6]/90 backdrop-blur-xl">
        <div className="section-shell flex h-[72px] items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-neutral-900 text-sm font-bold text-white transition-transform group-hover:-rotate-6">
              TI.
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-tight">
                Taher Itawa
              </span>
              <span className="mt-0.5 block text-[10px] tracking-wide text-neutral-500">
                Full-Stack Developer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-xs font-semibold text-yellow-400 transition hover:bg-[#b88b4a] md:inline-flex"
          >
            <h3 className="text-white">Let&apos;s talk</h3>
            <ArrowUpRight size={15} color="#fff" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white md:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-neutral-200 bg-[#faf9f6] px-4 py-4 md:hidden">
            <div className="section-shell flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-neutral-700 transition hover:bg-white hover:text-neutral-950"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-between rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white"
              >
                Start a conversation
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative scroll-mt-24">
        <div className="pointer-events-none absolute -right-36 top-10 size-[440px] rounded-full bg-[#e8d6b7]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-44 top-56 size-[380px] rounded-full bg-[#dce7ef]/35 blur-[110px]" />

        <div className="section-shell relative grid min-h-[calc(100svh-72px)] items-center gap-8 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:gap-4">
          <div className="relative z-20">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium text-neutral-600">
                Building useful digital experiences
              </span>
            </div>

            <p className="section-label mb-5">Hello, I&apos;m Taher</p>

            <h1 className="text-balance max-w-[720px] text-[clamp(3rem,7.5vw,6.3rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
              I build
              <br />
              <span className="relative inline-block">
                digital products
                <svg
                  viewBox="0 0 440 18"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full text-[#d4b27b]"
                >
                  <path
                    d="M3 12C108 2 296 1 436 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-neutral-400">that matter.</span>
            </h1>

            <p className="mt-8 max-w-[500px] text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              I&apos;m a full-stack developer focused on mobile apps, web
              platforms, and backend systems. I turn ideas into polished,
              practical products that people enjoy using.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#b88b4a]"
              >
                <h1 className="text-white">Explore my work</h1>
                <ArrowDownRight
                  size={17}
                  color="white"
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-6 py-4 text-sm font-semibold text-neutral-800 transition hover:border-neutral-900"
              >
                <Mail size={16} />
                Contact me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-neutral-200 pt-7">
              <div>
                <p className="text-xl font-semibold tracking-tight">Mobile</p>
                <p className="mt-1 text-xs text-neutral-500">iOS & Android</p>
              </div>
              <div className="h-10 w-px bg-neutral-200" />
              <div>
                <p className="text-xl font-semibold tracking-tight">Web</p>
                <p className="mt-1 text-xs text-neutral-500">
                  Modern interfaces
                </p>
              </div>
              <div className="h-10 w-px bg-neutral-200" />
              <div>
                <p className="text-xl font-semibold tracking-tight">Backend</p>
                <p className="mt-1 text-xs text-neutral-500">APIs & services</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] py-8 md:py-0">
            <FloatingProjectCards />
          </div>

          <a
            href="#projects"
            className="absolute bottom-7 left-0 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 transition hover:text-neutral-900 md:flex"
          >
            Scroll to explore
            <ArrowDown size={14} />
          </a>

          <span className="absolute bottom-9 right-0 hidden font-mono text-[10px] text-neutral-400 md:block">
            27°01&apos;N / 74°12&apos;E
          </span>
        </div>
      </section>

      {/* Project marquee */}
      <div className="border-y border-neutral-200 bg-white/70">
        <div className="section-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:justify-between">
          <span>Mobile applications</span>
          <span className="hidden text-[#c6a575] sm:inline">✳</span>
          <span>Web platforms</span>
          <span className="hidden text-[#c6a575] sm:inline">✳</span>
          <span>Backend systems</span>
          <span className="hidden text-[#c6a575] sm:inline">✳</span>
          <span>Product experiences</span>
        </div>
      </div>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Selected work</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                Made with purpose.
              </h2>
            </div>
            <p className="max-w-[360px] text-sm leading-7 text-neutral-600">
              A selection of mobile and web experiences spanning commerce,
              travel technology, and digital products.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                onClick={() => window.open(project.href, "_blank")}
                key={project.number}
                className="group overflow-hidden rounded-[26px] border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div
                  className={`relative m-3 aspect-[1.3/1] overflow-hidden rounded-[19px] bg-gradient-to-br ${project.accent}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} project preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-neutral-700 backdrop-blur">
                    {project.category}
                  </span>

                  <a
                    href={project.href}
                    target={
                      project.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    aria-label={`View ${project.name}`}
                    className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition hover:bg-neutral-900 hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-2 font-mono text-[10px] text-neutral-400">
                        / {project.number}
                      </p>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 text-neutral-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b88b4a]"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-neutral-200 bg-[#faf9f6] px-3 py-1.5 text-[10px] font-medium text-neutral-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 transition hover:text-[#9b7135]"
            >
              Have a project in mind?
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-24 border-y border-neutral-200 bg-white py-24 sm:py-32"
      >
        <div className="section-shell">
          <p className="section-label">What I do</p>
          <div className="mt-5 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-[650px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              From the first idea to the final build.
            </h2>
            <p className="max-w-[330px] text-sm leading-7 text-neutral-600">
              One development partner for the interface, application logic, and
              the services behind your product.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group border-t border-neutral-200 py-8 sm:py-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-neutral-200 bg-[#faf9f6] text-neutral-700 transition group-hover:border-[#e4d3b5] group-hover:bg-[#f5eddf] group-hover:text-[#9b7135]">
                      <Icon size={21} />
                    </div>
                    <span className="font-mono text-xs text-neutral-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[470px] text-sm leading-7 text-neutral-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f5f3ef] px-3 py-1.5 text-[10px] font-medium text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-24 sm:py-32">
        <div className="section-shell grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="section-label">A little about me</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
              Developer by craft.
              <br />
              Problem-solver by nature.
            </h2>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#f5eddf] text-[#9b7135]">
                <CheckCircle2 size={23} />
              </div>
              <div>
                <p className="text-sm font-semibold">Built for real users</p>
                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  Practical solutions, thoughtful details.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-sm leading-8 text-neutral-600 sm:text-base sm:leading-8">
            <p>
              I&apos;m Taher Itawa, a developer who enjoys bringing products to
              life across mobile and web. I work across the stack, from building
              interfaces to connecting APIs and implementing application logic.
            </p>

            <p>
              My experience includes React Native for mobile apps, React and
              Next.js for the web, and backend development with .NET and API
              integrations. I also use Figma to think through interfaces and
              user flows before they become code.
            </p>

            <p>
              My approach is straightforward: understand the problem, keep the
              experience simple, write maintainable code, and pay attention to
              the details that make a product feel finished.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border-b border-[#c7a675] pb-1 font-semibold text-neutral-900 transition hover:text-[#9b7135]"
            >
              Let&apos;s build something meaningful
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="border-y border-neutral-200 bg-[#f3f1ec] py-20 sm:py-24">
        <div className="section-shell">
          <div className="text-center">
            <p className="section-label">My toolkit</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              The tools behind the work.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-neutral-600">
              A practical set of technologies for building, integrating, and
              shipping modern digital products.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-[850px] flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#d8c29e] hover:text-[#8c6936]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eadcc4]/30 blur-[100px]" />

        <div className="section-shell relative">
          <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_25px_100px_rgba(0,0,0,0.04)] sm:p-12 lg:p-16">
            <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <p className="section-label">Have an idea?</p>
                <h2 className="mt-6 max-w-[650px] text-4xl font-semibold leading-[1.05] tracking-[-0.065em] sm:text-6xl">
                  Let&apos;s turn your next idea into something real.
                </h2>
                <p className="mt-6 max-w-[500px] text-sm leading-7 text-neutral-600 sm:text-base">
                  Have a mobile app, web platform, or product idea in mind? Tell
                  me a little about it, and let&apos;s explore what we can build
                  together.
                </p>

                <a
                  href="mailto:your-email@example.com?subject=Project%20Enquiry"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#b88b4a]"
                >
                  <Mail size={17} />

                  <h1 className="text-white">Send me an email</h1>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-[#d8c29e] hover:bg-[#faf9f6]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[#f5eddf] text-[#9b7135]">
                      <Mail size={19} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">Email</span>
                      <span className="mt-1 block text-xs text-neutral-500">
                        Let&apos;s discuss your project
                      </span>
                    </span>
                  </div>
                  <ArrowUpRight size={17} className="text-neutral-400" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-[#d8c29e] hover:bg-[#faf9f6]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[#f5eddf] text-[#9b7135]">
                      <ExternalLink size={19} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">
                        LinkedIn
                      </span>
                      <span className="mt-1 block text-xs text-neutral-500">
                        Connect professionally
                      </span>
                    </span>
                  </div>
                  <ArrowUpRight size={17} className="text-neutral-400" />
                </a>

                <a
                  href="#projects"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-[#d8c29e] hover:bg-[#faf9f6]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[#f5eddf] text-[#9b7135]">
                      <MessageCircle size={19} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">
                        My work
                      </span>
                      <span className="mt-1 block text-xs text-neutral-500">
                        Explore selected projects
                      </span>
                    </span>
                  </div>
                  <ArrowUpRight size={17} className="text-neutral-400" />
                </a>
              </div>
            </div>

            <div className="mt-14 flex flex-col justify-between gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center">
              <p className="text-xs leading-6 text-neutral-500">
                Good products start with a good conversation.
              </p>
              <a
                href="#home"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 transition hover:text-[#9b7135]"
              >
                Back to top
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="section-shell flex flex-col justify-between gap-5 py-7 sm:flex-row sm:items-center">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-neutral-900 text-xs font-bold text-white">
              TI.
            </span>
            <span className="text-sm font-semibold">Taher Itawa</span>
          </a>

          <p className="text-xs text-neutral-500">
            ©Taher Itawa. Designed and built with
            care.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 transition hover:text-neutral-950"
          >
            Back to the beginning
            <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}
