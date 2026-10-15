import NextImage from "next/image";

// 완료 표시 아이콘(체크). 발행 완료·참석 신청 완료에서 쓴다.
export default function SuccessIcon() {
  return (
    <div className="flex size-64 shrink-0 items-center justify-center rounded-pill bg-info-subtle">
      <NextImage src="/icons/check-32.svg" alt="" width={32} height={32} className="size-32" />
    </div>
  );
}
