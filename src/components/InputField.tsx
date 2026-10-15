import type { InputHTMLAttributes } from "react";

// 한 줄 입력 박스. 빈 칸(default) · 입력 중(focus) · 값 있음(active)은 브라우저가 알아서 바꾼다.
export default function InputField({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`h-45 w-full rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary ${className}`}
      {...props}
    />
  );
}
