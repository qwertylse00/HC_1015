type RadioProps = {
  state?: "default" | "selected" | "disabled";
};

// 라디오 모양만 그린다. 실제 선택은 RadioOption 안의 <input>이 맡는다.
export default function Radio({ state = "default" }: RadioProps) {
  const outer = {
    default: "bg-text-tertiary",
    selected: "bg-action-primary",
    disabled: "bg-text-disabled",
  }[state];

  return (
    <span className="flex size-48 shrink-0 items-center justify-center rounded-pill peer-focus-visible:outline-2 peer-focus-visible:outline-action-primary">
      <span className={`flex size-20 items-center justify-center rounded-pill ${outer}`}>
        <span
          className={`rounded-pill bg-surface-default ${state === "selected" ? "size-8" : "size-16"}`}
        />
      </span>
    </span>
  );
}
