interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {subtitle}
      </p>
    )}
    <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-primary/40" />
  </div>
);

export default SectionTitle;
