interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-2 pt-10 text-center sm:px-8 sm:pt-14">
      <h1 className="inline-block bg-gradient-to-r from-[var(--pink-dark)] via-[var(--pink-dark)] to-[var(--peach-dark)] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h1>
      <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[var(--pink)] to-[var(--peach)]" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--ink-soft)] sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
