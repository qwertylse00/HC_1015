import Image from "@/components/Image";
import SectionHeader from "@/components/SectionHeader";

type InvitationCoverProps = {
  subtitle?: string;
  title: string;
  date: string;
  location: string;
};

// 초대장 상단 커버. /create 미리보기와 /i/[id]에서 같이 쓴다.
export default function InvitationCover({ subtitle, title, date, location }: InvitationCoverProps) {
  return (
    <section className="flex w-full flex-col items-center gap-page-horizontal bg-linear-to-b from-cover-gradient-start to-cover-gradient-end px-page-horizontal py-cover-inset">
      <SectionHeader subtitle={subtitle} title={title} tone="inverse" />
      <Image type="character" alt="" />
      <CoverDetail label="일시" value={date} />
      <CoverDetail label="장소" value={location} />
    </section>
  );
}

function CoverDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-inline-md">
      <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs text-caption-md font-semibold text-info-strong">
        {label}
      </span>
      <p className="w-full text-center text-label-md text-text-inverse">{value}</p>
    </div>
  );
}
