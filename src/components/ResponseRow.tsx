import AttendanceBadge from "@/components/AttendanceBadge";

type ResponseRowProps = {
  name: string;
  status: "yes" | "no";
  // 불참이면 동반 인원을 넣지 않는다.
  meta?: string;
};

// 응답 현황 목록 한 줄
export default function ResponseRow({ name, status, meta }: ResponseRowProps) {
  return (
    <div className="flex h-78 w-full items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md">
      <div className="flex min-w-0 flex-1 flex-col gap-inline-sm">
        <p className="truncate text-label-lg text-text-primary">{name}</p>
        {meta && <p className="truncate text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge status={status} />
    </div>
  );
}
