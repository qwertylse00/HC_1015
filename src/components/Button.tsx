import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

// 크기별 스타일 (Figma Button 컴포넌트 기준)
const sizeStyles = {
  sm: "gap-control-compact py-inline-sm text-label-md bg-action-primary enabled:hover:bg-action-hover-overlay",
  md: "h-48 gap-inline-compact py-control-x text-label-md bg-text-secondary enabled:hover:bg-linear-to-r enabled:hover:from-action-hover-overlay enabled:hover:to-action-hover-overlay",
  lg: "h-52 gap-control-compact py-inline-sm text-label-lg bg-action-primary enabled:hover:bg-action-hover-overlay",
};

// 기본 버튼. 필수값이 비어 있으면 disabled로 쓴다.
export default function Button({
  size = "sm",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-control px-control-y text-center text-text-inverse disabled:cursor-not-allowed disabled:bg-border-subtle disabled:bg-none ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
