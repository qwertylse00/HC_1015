import type { InputHTMLAttributes } from "react";
import Radio from "@/components/Radio";

type RadioOptionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

// 라디오 + 라벨 한 줄. 참석/불참 선택에 쓴다.
export default function RadioOption({ label, checked, disabled, className = "", ...props }: RadioOptionProps) {
  const state = disabled ? "disabled" : checked ? "selected" : "default";
  return (
    <label
      className={`flex items-center ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      <input type="radio" className="peer sr-only" checked={checked} disabled={disabled} {...props} />
      <Radio state={state} />
      <span className="text-label-lg whitespace-nowrap text-text-strong">{label}</span>
    </label>
  );
}
