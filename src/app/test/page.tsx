"use client";

import { useState, type ReactNode } from "react";
import AttendanceBadge from "@/components/AttendanceBadge";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import EmptyState from "@/components/EmptyState";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InputField from "@/components/InputField";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Radio from "@/components/Radio";
import RadioOption from "@/components/RadioOption";
import ResponseRow from "@/components/ResponseRow";
import RSVPCard from "@/components/RSVPCard";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import StepButton from "@/components/StepButton";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import TextareaField from "@/components/TextareaField";

// 실습용: 모든 컴포넌트를 종류별로 보여주는 페이지
const sizes = ["sm", "md", "lg"] as const;

// hover는 마우스를 올려야 보이므로, 미리보기용으로 hover 색을 강제로 입힌다.
const hoverPreview = {
  sm: "bg-action-hover-overlay!",
  md: "bg-linear-to-r from-action-hover-overlay to-action-hover-overlay",
  lg: "bg-action-hover-overlay!",
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-stack-md">
      <h2 className="text-heading-lg text-text-primary">{title}</h2>
      {children}
    </section>
  );
}

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<"yes" | "no">("yes");

  return (
    <main className="mx-auto flex w-full max-w-480 flex-col gap-section-xl bg-background-subtle px-page-horizontal py-section-lg">
      <Section title="Icon">
        <div className="flex items-center gap-stack-lg">
          <Icon name="check" />
          <Icon name="plus" />
          <Icon name="minus" />
          <Icon name="none" className="outline outline-border-default" />
        </div>
      </Section>

      <Section title="Button">
        <div className="grid grid-cols-[auto_1fr_1fr_1fr] items-center gap-stack-md">
          <span />
          <span className="text-caption-md text-text-secondary">default</span>
          <span className="text-caption-md text-text-secondary">hover</span>
          <span className="text-caption-md text-text-secondary">disabled</span>
          {sizes.map((size) => (
            <div key={size} className="contents">
              <span className="text-caption-md text-text-secondary">{size}</span>
              <div>
                <Button size={size}>Button</Button>
              </div>
              <div>
                <Button size={size} className={hoverPreview[size]}>
                  Button
                </Button>
              </div>
              <div>
                <Button size={size} disabled>
                  Button
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Label">
        <Label>Label</Label>
        <Label required>Label</Label>
      </Section>

      <Section title="InputField · Input">
        <InputField placeholder="placeholder" />
        <InputField placeholder="placeholder" defaultValue="값이 채워진 상태" />
        <Input label="장소" name="test-place" required placeholder="장소를 입력해주세요" helper="안내 문구" />
      </Section>

      <Section title="TextareaField · Textarea">
        <TextareaField placeholder="게스트에게 전할 초대 글을 적어주세요" />
        <Textarea label="본문" name="test-body" required rows={4} placeholder="게스트에게 전할 초대 글을 적어주세요" helper="엔터로 줄을 나눌 수 있어요" />
        <Textarea label="제목" name="test-title" required rows={2} placeholder="초대장 제목을 적어주세요" />
      </Section>

      <Section title="Radio · RadioOption">
        <div className="flex">
          <Radio state="default" />
          <Radio state="selected" />
          <Radio state="disabled" />
        </div>
        <div className="flex">
          <RadioOption label="참석" name="test-status" checked={status === "yes"} onChange={() => setStatus("yes")} className="flex-1" />
          <RadioOption label="불참" name="test-status" checked={status === "no"} onChange={() => setStatus("no")} className="flex-1" />
        </div>
      </Section>

      <Section title="StepButton · Stepper">
        <div className="flex gap-stack-md">
          <StepButton icon="minus" />
          <StepButton icon="minus" disabled />
          <StepButton icon="plus" />
        </div>
        <Stepper value={count} onChange={setCount} />
      </Section>

      <Section title="AttendanceBadge">
        <div className="flex gap-stack-md">
          <AttendanceBadge status="yes" />
          <AttendanceBadge status="no" />
        </div>
      </Section>

      <Section title="SuccessIcon">
        <SuccessIcon />
      </Section>

      <Section title="StatCard">
        <div className="grid grid-cols-3 gap-stack-sm">
          <StatCard label="참석" value="2명" />
          <StatCard label="불참" value="1명" />
          <StatCard label="참석 인원 합계" value="5명" highlight />
        </div>
      </Section>

      <Section title="InfoRow">
        <InfoRow label="일시" value="2026년 11월 14일 (토) 09:00" />
        <InfoRow type="spread" label="일시" value="2026년 11월 14일 (토) 09:00" />
      </Section>

      <Section title="ResponseRow">
        <ResponseRow name="김허들" status="yes" meta="동반 1명" />
        <ResponseRow name="이펭귄" status="no" />
      </Section>

      <Section title="CopyLinkField">
        <CopyLinkField title="초대장 링크" description="게스트에게 공유하는 링크예요." url="https://example.com/i/k3f9x2a7" />
      </Section>

      <Section title="EmptyState">
        <EmptyState />
      </Section>

      <Section title="SectionHeader">
        <SectionHeader subtitle="Subtitle" title="title" description="Description" />
      </Section>

      <Section title="NavBar">
        <div className="bg-surface-default">
          <NavBar title="Label" />
        </div>
      </Section>

      <Section title="Image">
        <div className="flex items-start gap-stack-lg">
          <Image type="character" alt="펭귄 캐릭터" />
          <Image type="flag" alt="깃발" />
        </div>
      </Section>

      <Section title="InvitationCover">
        <InvitationCover
          subtitle="Huddling Club 2nd Meetup"
          title={"허들링 클럽 2번째\n오프라인 밋업"}
          date="2026년 11월 14일 (토) 09:00"
          location="세종 남극 기지"
        />
      </Section>

      <Section title="RSVPCard">
        <RSVPCard />
        <RSVPCard initialState="done" defaultValues={{ name: "김허들", status: "yes", companions: 1 }} />
      </Section>
    </main>
  );
}
