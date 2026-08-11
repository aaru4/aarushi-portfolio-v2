import { Linkedin, Mail, MoveRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const badges = ['13x Hackathon Winner', 'NCWIT National Winner', 'Girls Who Code 20 Under 20'];

export default function Home() {
  return (
    <main className="w-full">
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-10 sm:px-8 sm:py-16 lg:min-h-[calc(100vh-140px)] lg:flex-row lg:justify-between lg:gap-8 lg:py-0">
        {/* Text panel */}
        <div className="w-full rounded-3xl bg-gradient-to-br from-[var(--peach)] via-[var(--peach)] to-[var(--mint)] p-8 text-center shadow-sm sm:p-12 lg:w-1/2 lg:p-14 lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
            Software Engineer &middot; AI Researcher
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
            Aarushi Ammavajjala
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--ink)]/80 sm:text-lg lg:mx-0">
            B.S. in Computer Science at the Georgia Institute of Technology, building at the
            intersection of software engineering, applied AI, and healthcare.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-[var(--ink)]/15 bg-white/60 px-3 py-1.5 text-xs font-semibold text-[var(--ink)]"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="mailto:aarushi.ammavajjala@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
              <MoveRight size={16} />
            </a>
            <Link
              href="/projPage"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--ink)]/20 bg-white/50 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              See My Work
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <a href="mailto:aarushi.ammavajjala@gmail.com" aria-label="Email Aarushi">
              <Mail
                size={26}
                className="text-[var(--ink)] transition-all duration-300 hover:scale-110 hover:text-[var(--pink-dark)]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aarushi-ammavajjala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aarushi's LinkedIn"
            >
              <Linkedin
                size={26}
                className="text-[var(--ink)] transition-all duration-300 hover:scale-110 hover:text-[var(--teal-dark)]"
              />
            </a>
            <a
              href="https://github.com/aaru4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aarushi's GitHub"
            >
              <FaGithub
                size={26}
                className="text-[var(--ink)] transition-all duration-300 hover:scale-110 hover:text-[var(--mint-dark)]"
              />
            </a>
          </div>
        </div>

        {/* Photo panel */}
        <div className="relative flex w-full items-center justify-center py-6 lg:w-1/2 lg:py-0">
          <div
            className="absolute h-56 w-56 rounded-full bg-[var(--teal)]/40 blur-3xl sm:h-72 sm:w-72"
            aria-hidden
          />
          <div
            className="absolute h-40 w-40 translate-x-16 translate-y-20 rounded-full bg-[var(--pink)]/50 blur-3xl sm:h-56 sm:w-56"
            aria-hidden
          />
          <div className="relative rounded-full bg-[var(--paper)] p-2 shadow-xl ring-1 ring-[var(--border-soft)]">
            <Image
              src="/headshot.png"
              alt="Portrait of Aarushi Ammavajjala"
              width={340}
              height={340}
              priority
              className="aspect-square rounded-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
