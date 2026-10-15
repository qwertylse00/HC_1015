import type { Metadata } from "next";
import { Suspense } from "react";
import InvitationView from "@/components/InvitationView";
import RSVPCard from "@/components/RSVPCard";
import { formatDateTime } from "@/lib/format";
import { mockInvitation } from "@/lib/mock";

export const metadata: Metadata = {
  title: "초대장",
};

export default function InvitationPage({ params }: PageProps<"/i/[id]">) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-375 bg-surface-default">
      <Suspense fallback={null}>
        {params.then(({ id }) => (
          <Invitation id={id} />
        ))}
      </Suspense>
    </main>
  );
}

// TODO: Supabase 연결 전까지는 어떤 id로 들어와도 가짜 데이터를 보여준다.
function Invitation({ id }: { id: string }) {
  const invitation = { ...mockInvitation, id };

  return (
    <>
      <InvitationView
        title={invitation.title}
        date={formatDateTime(invitation.startsAt)}
        location={invitation.location}
        body={invitation.body}
      />

      <section className="bg-background-subtle px-page-horizontal pt-section-lg pb-section-xl">
        <RSVPCard />
      </section>
    </>
  );
}
