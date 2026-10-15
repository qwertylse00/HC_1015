import type { InputHTMLAttributes } from "react";
import InputField from "@/components/InputField";
import Label from "@/components/Label";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helper?: string;
};

// 라벨 + 한 줄 입력 박스 + 안내 문구. 일시·장소·이름처럼 한 줄 값에 쓴다.
export default function Input({ label, helper, required, id, name, ...props }: InputProps) {
  const inputId = id ?? name;
  return (
    <div className="flex w-full flex-col items-start gap-inline-compact">
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <InputField id={inputId} name={name} required={required} {...props} />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
