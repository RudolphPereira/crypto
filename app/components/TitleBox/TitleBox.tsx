import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  title?: string;
  subtitle?: string;
  actionBtn?: React.ReactNode;
  hasBreadCrumb?: boolean;
  breadCrumbTitle?: string;
};

export const TitleBox = ({
  title,
  subtitle,
  actionBtn,
  hasBreadCrumb,
  breadCrumbTitle,
}: Props) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row justify-between sm:items-end">
      <div className=" flex flex-col gap-0.5">
        {title && !hasBreadCrumb && (
          <h2 className="text-background font-[500] text-lg">{title}</h2>
        )}
        {title && hasBreadCrumb && (
          <div className="flex gap-2 items-center flex-wrap">
            <Link
              href="/portfolio"
              className="flex items-center gap-1 text-background font-[500] text-lg transition-all ease-in duration-200 hover:text-periwinkle-blue"
            >
              <ArrowLeft />
              {title}
            </Link>
            <h2 className="text-background font-[500] text-lg flex gap-2 items-center">
              <span>/</span>
              <span className="first-letter:capitalize">{breadCrumbTitle}</span>
            </h2>
          </div>
        )}
        {subtitle && <p className="text-sm text-background/70">{subtitle}</p>}
      </div>
      {actionBtn && actionBtn}
    </div>
  );
};
