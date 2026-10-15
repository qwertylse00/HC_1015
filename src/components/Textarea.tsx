import type { TextareaHTMLAttributes } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> & {
  label: string;
  helper?: string;
  // 2: 제목(최대 2줄) · 4: 본문
  rows?: 2 | 4;
};

// 라벨 + 여러 줄 입력 박스 + 안내 문구
export default function Textarea({
  label,
  helper,
  rows = 4,
  required,
  id,
  name,
  ...props
}: TextareaProps) {
  const textareaId = id ?? name;
  return (
    <div className="flex w-full flex-col items-start gap-inline-compact">
      <Label htmlFor={textareaId} required={required}>
        {label}
      </Label>
      <TextareaField
        id={textareaId}
        name={name}
        required={required}
        rows={rows}
        className={rows === 2 ? "h-72" : "h-120"}
        {...props}
      />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
