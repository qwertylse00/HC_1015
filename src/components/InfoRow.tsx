type InfoRowProps = {
  label: string;
  value: string;
  type?: "inline" | "spread";
};

// 라벨-값 한 줄. inline 붙여서 · spread 양끝 정렬
export default function InfoRow({ label, value, type = "inline" }: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className="flex w-full items-center gap-control-compact">
        <p className="text-body-md whitespace-nowrap text-text-secondary">{label}</p>
        <p className="min-w-0 flex-1 text-right text-label-md text-text-strong">{value}</p>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-control-compact">
      <p className="text-label-lg whitespace-nowrap text-text-secondary">{label}</p>
      <span className="h-14 w-px shrink-0 bg-border-default" />
      <p className="text-label-lg text-text-strong">{value}</p>
    </div>
  );
}
