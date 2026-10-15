"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import Input from "@/components/Input";
import InvitationView from "@/components/InvitationView";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";

// 제목은 최대 2줄까지만 받는다.
function limitLines(value: string, max: number) {
  return value.split("\n").slice(0, max).join("\n");
}

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");

  const [publishedId, setPublishedId] = useState<string | null>(null);

  const isFilled = [title, date, location, body].every((value) => value.trim() !== "");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isFilled) return;
    // TODO: Supabase에 저장하고 crypto.randomUUID()로 만든 ID를 쓴다. 지금은 데모 화면(/i/demo)으로 연결한다.
    setPublishedId("demo");
    window.scrollTo(0, 0);
  }

  if (publishedId) {
    return <Published id={publishedId} />;
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-375 flex-col gap-control-compact bg-surface-default">
      <NavBar title="초대장 만들기" />

      <form
        id="create-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset"
      >
        <div className="flex flex-col gap-stack-lg">
          <Textarea
            label="제목"
            name="title"
            required
            rows={2}
            maxLength={60}
            placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            value={title}
            onChange={(e) => setTitle(limitLines(e.target.value, 2))}
          />
          <Input
            label="일시"
            name="date"
            required
            maxLength={50}
            placeholder="예) 2026년 11월 14일 (토) 09:00"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            label="장소"
            name="location"
            required
            maxLength={100}
            placeholder="예) 세종 남극 기지"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Textarea
            label="본문"
            name="body"
            required
            rows={4}
            maxLength={2000}
            placeholder="게스트에게 전할 초대 글을 적어주세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* 미리보기: 입력한 값을 그대로 보여준다 */}
        <section className="flex flex-col gap-inline-md">
          <Label as="span">미리보기</Label>
          <div className="h-460 overflow-y-auto rounded-control border border-border-subtle">
            <InvitationView title={title} date={date} location={location} body={body} />
          </div>
          <p className="text-caption-md text-text-tertiary">입력하는 내용이 바로 미리보기에 반영돼요.</p>
        </section>
      </form>

      {/* 발행하기 버튼: 화면 하단 고정 */}
      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-375 bg-surface-default p-page-horizontal">
        <Button type="submit" form="create-form" size="lg" className="w-full" disabled={!isFilled}>
          발행하기
        </Button>
      </div>
    </div>
  );
}

// 발행 완료: 초대장 링크와 응답 현황 링크를 보여준다.
function Published({ id }: { id: string }) {
  const router = useRouter();
  const inviteUrl = `${window.location.origin}/i/${id}`;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-375 flex-col gap-page-horizontal bg-surface-default">
      <NavBar title="발행 완료" />

      <div className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        <div className="flex flex-col items-center gap-stack-sm py-stack-lg text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">초대장이 발행됐어요!</p>
          <p className="text-body-md text-text-secondary">아래 두 링크를 복사해 두세요.</p>
        </div>

        <CopyLinkField title="초대장 링크" description="게스트에게 공유하는 링크예요." url={inviteUrl} />
        <CopyLinkField
          title="응답 현황 링크"
          description="호스트용이에요. 이 링크를 아는 사람은 응답 목록을 볼 수 있어요."
          url={`${inviteUrl}/responses`}
        />

        <Button size="lg" className="w-full" onClick={() => router.push(`/i/${id}`)}>
          내 초대장 보기
        </Button>
      </div>
    </div>
  );
}
