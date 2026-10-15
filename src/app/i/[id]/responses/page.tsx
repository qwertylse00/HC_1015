import type { Metadata } from "next";
import { Suspense } from "react";
import EmptyState from "@/components/EmptyState";
import NavBar from "@/components/NavBar";
import ResponseRow from "@/components/ResponseRow";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { formatDateTime, formatShortDateTime } from "@/lib/format";
import { mockInvitation, mockRsvps, type Rsvp } from "@/lib/mock";
import CopyInviteButton from "./CopyInviteButton";

export const metadata: Metadata = {
  title: "응답 현황",
};

export default function ResponsesPage({ params }: PageProps<"/i/[id]/responses">) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-375 flex-col gap-page-horizontal bg-surface-default">
      <NavBar title="응답 현황" />
      <Suspense fallback={null}>
        {params.then(({ id }) => (
          <Responses id={id} />
        ))}
      </Suspense>
    </main>
  );
}

// 불참이면 동반 인원을 넣지 않는다.
function responseMeta(rsvp: Rsvp) {
  const time = formatShortDateTime(rsvp.createdAt);
  return rsvp.status === "yes" ? `동반 ${rsvp.companions}명 · ${time}` : time;
}

// TODO: Supabase 연결 전까지는 어떤 id로 들어와도 가짜 데이터를 보여준다.
function Responses({ id }: { id: string }) {
  const invitation = mockInvitation;
  const rsvps = mockRsvps;

  const attending = rsvps.filter((rsvp) => rsvp.status === "yes");
  const notAttendingCount = rsvps.length - attending.length;
  // 참석 인원 합계 = 참석한 사람 + 동반 인원
  const totalPeople = attending.reduce((sum, rsvp) => sum + 1 + rsvp.companions, 0);

  return (
    <div className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
      <SectionHeader
        subtitle="Responses"
        title={invitation.title.replace(/\n/g, " ")}
        description={`${formatDateTime(invitation.startsAt)} · ${invitation.location}`}
      />

      <div className="flex flex-col gap-section-lg">
        <div className="grid grid-cols-3 gap-inline-md whitespace-nowrap">
          <StatCard label="참석" value={`${attending.length}명`} />
          <StatCard label="불참" value={`${notAttendingCount}명`} />
          <StatCard label="참석 인원 합계" value={`${totalPeople}명`} highlight />
        </div>
        <p className="text-caption-md text-text-tertiary">참석 인원 합계 = 참석한 사람 + 동반 인원</p>
      </div>

      <section className="flex flex-col gap-inline-md">
        <h2 className="text-heading-md text-text-strong">응답 목록</h2>
        {rsvps.length === 0 ? (
          <EmptyState />
        ) : (
          rsvps.map((rsvp) => (
            <ResponseRow key={rsvp.id} name={rsvp.name} status={rsvp.status} meta={responseMeta(rsvp)} />
          ))
        )}
      </section>

      <CopyInviteButton id={id} />
    </div>
  );
}
