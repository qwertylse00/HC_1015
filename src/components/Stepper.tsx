import StepButton from "@/components/StepButton";

type StepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  unit?: string;
};

// 동반 인원 입력(− 값 +). 최솟값이면 − 버튼이 disabled
export default function Stepper({ value, onChange, min = 0, unit = "명" }: StepperProps) {
  return (
    <div className="flex items-center gap-stack-sm">
      <StepButton icon="minus" disabled={value <= min} onClick={() => onChange(value - 1)} />
      <p className="text-heading-md whitespace-nowrap text-text-strong" aria-live="polite">
        {value}
        {unit}
      </p>
      <StepButton icon="plus" onClick={() => onChange(value + 1)} />
    </div>
  );
}
