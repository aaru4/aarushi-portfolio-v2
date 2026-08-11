import { Linkedin, Mail } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="w-full border-t border-[var(--border-soft)] bg-[var(--paper-alt)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-[var(--ink-soft)]">
          © {year} Aarushi Ammavajjala. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:aarushi.ammavajjala@gmail.com"
            aria-label="Email Aarushi"
            className="rounded-full p-2 text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--pink)]"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/aarushi-ammavajjala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aarushi's LinkedIn"
            className="rounded-full p-2 text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--teal)]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/aaru4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aarushi's GitHub"
            className="rounded-full p-2 text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--mint)]"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
