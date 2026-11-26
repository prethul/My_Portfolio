export default function PageHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (<div className="sec !pb-4"><p className="text-xs uppercase tracking-[.3em] text-accent">{eyebrow}</p>
    <h1 className="grad-text mt-3 font-serif text-4xl sm:text-6xl">{title}</h1>
    {sub && <p className="mt-4 max-w-2xl text-mute">{sub}</p>}</div>);
}
