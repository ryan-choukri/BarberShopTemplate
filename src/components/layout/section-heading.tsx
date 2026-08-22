type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "split";
};

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const split = align === "split";

  return (
    <header
      className={
        split ? "grid gap-6 md:grid-cols-12 md:items-end" : "space-y-5"
      }
    >
      <div className={split ? "md:col-span-7 space-y-4" : "space-y-5"}>
        {kicker ? (
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
            {kicker}
          </p>
        ) : null}{" "}
        <h2 className="font-joaquin [word-spacing:-20%] tracking-normal  leading-[0.92] text-4xl uppercase leading-[0.92] tracking-[0.01em] text-zinc-50 md:text-7xl">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p
          className={
            split
              ? "md:col-span-5 text-sm leading-relaxed text-zinc-300 md:text-base"
              : "max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base"
          }
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
