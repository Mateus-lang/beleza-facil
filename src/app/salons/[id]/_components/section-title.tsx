interface SectionTitleProps {
  children: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-foreground text-xs font-bold uppercase">{children}</h2>
  );
};

export default SectionTitle;
