interface SectionHeadingProps {
  tag:   string;
  title: string;
  description?: string;
}

export function SectionHeading({ tag, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-11 max-w-xl">
      <div className="mb-3 font-mono text-[12.5px] tracking-wide text-teal">{tag}</div>
      <h2 className="mb-3 font-mono text-[28px] font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && <p className="text-[15.5px] text-ink-dim">{description}</p>}
    </div>
  );
}
