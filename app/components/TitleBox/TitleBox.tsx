type Props = {
  title?: string;
  subtitle?: string;
  actionBtn?: React.ReactNode;
};

export const TitleBox = ({ title, subtitle, actionBtn }: Props) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row justify-between sm:items-end">
      <div className=" flex flex-col gap-0.5">
        {title && (
          <h2 className="text-background font-[500] text-lg">{title}</h2>
        )}
        {subtitle && <p className="text-sm text-background/70">{subtitle}</p>}
      </div>
      {actionBtn && actionBtn}
    </div>
  );
};
