type AttendanceBadgeProps = {
  status: "yes" | "no";
};

// 참석 여부 배지. yes 참석 · no 불참
export default function AttendanceBadge({ status }: AttendanceBadgeProps) {
  const isYes = status === "yes";
  return (
    <span
      className={`inline-flex shrink-0 rounded-pill px-control-compact py-inline-sm text-label-md whitespace-nowrap ${
        isYes ? "bg-info-subtle text-info-strong" : "bg-background-subtle text-text-secondary"
      }`}
    >
      {isYes ? "참석" : "불참"}
    </span>
  );
}
