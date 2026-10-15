import NextImage from "next/image";
import type { ButtonHTMLAttributes } from "react";

type StepButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: "minus" | "plus";
};

// Stepper의 −/+ 버튼. 더 못 줄이면 disabled
export default function StepButton({ icon, disabled, ...props }: StepButtonProps) {
  // Figma에는 minus의 disabled 아이콘만 있다.
  const src = icon === "minus" && disabled ? "/icons/minus-20-disabled.svg" : `/icons/${icon}-20.svg`;

  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={icon === "minus" ? "줄이기" : "늘리기"}
      className="flex size-44 shrink-0 cursor-pointer items-center justify-center rounded-control border border-border-default bg-surface-default disabled:cursor-not-allowed"
      {...props}
    >
      <NextImage src={src} alt="" width={20} height={20} className="size-20" />
    </button>
  );
}
