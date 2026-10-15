import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import InvitationCover from "@/components/InvitationCover";

type InvitationViewProps = {
  title: string;
  date: string;
  location: string;
  body: string;
};

// 초대장 본문(커버 · 본문 · 일시/장소 카드). /create 미리보기와 /i/[id]에서 같이 쓴다.
export default function InvitationView({ title, date, location, body }: InvitationViewProps) {
  return (
    <div className="flex w-full flex-col">
      <InvitationCover title={title} date={date} location={location} />

      <div className="flex flex-col items-center gap-stack-md bg-surface-default px-page-horizontal py-cover-inset">
        <Image type="flag" alt="" />
        <p className="w-full text-center text-body-compact break-words whitespace-pre-wrap text-text-primary">
          {body}
        </p>
      </div>

      <div className="bg-surface-default px-page-horizontal pt-stack-lg pb-section-lg">
        <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={date} />
          <InfoRow label="장소" value={location} />
        </div>
      </div>
    </div>
  );
}
