import NextImage from "next/image";

type IconProps = {
  name: "none" | "check" | "plus" | "minus";
  className?: string;
};

// Figma icon/* (24px). none은 자리만 차지하는 빈 아이콘.
export default function Icon({ name, className = "" }: IconProps) {
  if (name === "none") {
    return <span className={`block size-24 shrink-0 ${className}`} />;
  }
  return (
    <NextImage
      src={`/icons/${name}.svg`}
      alt=""
      width={24}
      height={24}
      className={`block size-24 shrink-0 ${className}`}
    />
  );
}
