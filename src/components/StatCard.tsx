type StatCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

// 응답 현황 숫자 카드. highlight는 참석 인원 합계에만 쓴다.
export default function StatCard({ label, value, highlight = false }: StatCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-inline-sm rounded-card px-control-x py-stack-md ${
        highlight ? "bg-info-subtle" : "bg-surface-subtle"
      }`}
    >
      <p className="text-caption-md text-text-secondary">{label}</p>
      <p className={`text-title-lg ${highlight ? "text-info-strong" : "text-text-strong"}`}>
        {value}
      </p>
    </div>
  );
}
