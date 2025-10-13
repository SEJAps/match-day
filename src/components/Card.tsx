import type { FC, ReactNode } from "react";

type Props = {
  bg?: string;
  bgBtn?: string;
  title: string;
  text: string;
  items?: string[];
  label: string;
  icon?: ReactNode;
};

const Card: FC<Props> = ({ bg, bgBtn, title, text, items, label, icon }) => {
  return (
    <article
      className={`flex flex-col gap-2 rounded-2xl shadow-sm`}
      style={{
        background: bg || "white",
      }}
    >
      <header className="flex flex-col items-center gap-4 mb-2 pt-14">
        {icon}
        <h4 className="text-2xl font-bold w-full pl-8">{title}</h4>
      </header>
      <p className="px-8 mb-4">{text}</p>
      {items && items.length > 0 && (
        <ul className="italic w-full pl-8 list-disc space-y-1 list-inside mb-4">
          {items.map((item) => (
            <li key={item} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      )}
      <footer className="mb-14 flex-1 flex items-end px-8">
        <button
          type="button"
          style={{
            background: bgBtn,
            color: "white",
          }}
          className={`w-full border rounded-md px-4 py-2 `}
        >
          {label}
        </button>
      </footer>
    </article>
  );
};

export default Card;
