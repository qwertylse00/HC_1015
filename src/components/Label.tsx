import type { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  // 입력창과 연결되지 않는 제목(라디오 묶음, Stepper)은 span으로 쓴다.
  as?: "label" | "span";
};

// 입력 필드 위 라벨. required면 "필수" 표시가 붙는다.
export default function Label({
  required = false,
  as: Tag = "label",
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <Tag className={`flex items-center gap-inline-sm whitespace-nowrap ${className}`} {...props}>
      <span className="text-label-lg text-text-strong">{children}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </Tag>
  );
}
