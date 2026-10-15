import type { TextareaHTMLAttributes } from "react";

// 여러 줄 입력 박스. 상태(default · focus · active)는 InputField와 같다.
export default function TextareaField({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`h-45 w-full resize-none rounded-control [scrollbar-width:none] border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary ${className}`}
      {...props}
    />
  );
}
