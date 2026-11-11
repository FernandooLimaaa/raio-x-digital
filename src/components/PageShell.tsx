interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  surface?: boolean;
  wide?: boolean;
}

export default function PageShell({ title, subtitle, children, surface, wide }: Props) {
  return (
    <section className="page-section" style={{ background: surface ? 'var(--surface)' : 'var(--bg)' }}>
      <div className={wide ? 'container-wide' : 'container'}>
        <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid var(--line)' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', lineHeight: 1.2, marginTop: 0, marginBottom: '0.6rem' }}>{title}</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--ink-soft)', marginTop: 0, marginBottom: 0 }}>{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
