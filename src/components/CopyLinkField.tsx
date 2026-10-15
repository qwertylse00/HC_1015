"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";

type CopyLinkFieldProps = {
  title: string;
  description: string;
  url: string;
};

// 발행 후 공유할 링크 한 줄. 초대장 링크·응답 현황 링크에 쓴다.
export default function CopyLinkField({ title, description, url }: CopyLinkFieldProps) {
  return (
    <div className="flex w-full flex-col items-start gap-inline-md rounded-card bg-surface-subtle p-stack-md">
      <p className="text-label-lg text-text-strong">{title}</p>
      <div className="flex w-full items-center gap-inline-md">
        <InputField readOnly value={url} aria-label={title} className="min-w-0 flex-1" />
        <Button onClick={() => navigator.clipboard.writeText(url)}>복사</Button>
      </div>
      <p className="text-caption-md text-text-tertiary">{description}</p>
    </div>
  );
}
