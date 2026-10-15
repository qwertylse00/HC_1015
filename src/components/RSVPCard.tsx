"use client";

import { useState } from "react";
import Button from "@/components/Button";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";

export type RSVPData = {
  name: string;
  status: "yes" | "no";
  companions: number;
};

type RSVPCardProps = {
  // 제출하면 호출된다. 끝나면 같은 자리에서 완료(done) 화면으로 바뀐다.
  onSubmit?: (data: RSVPData) => void | Promise<void>;
  // 미리보기용 처음 상태와 값
  initialState?: "form" | "done";
  defaultValues?: Partial<RSVPData>;
};

// 초대장 보기 화면의 참석 신청 카드
export default function RSVPCard({
  onSubmit,
  initialState = "form",
  defaultValues = {},
}: RSVPCardProps) {
  const [done, setDone] = useState(initialState === "done");
  const [name, setName] = useState(defaultValues.name ?? "");
  const [status, setStatus] = useState(defaultValues.status ?? "yes");
  const [companions, setCompanions] = useState(defaultValues.companions ?? 0);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await onSubmit?.({ name: name.trim(), status, companions });
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex w-full flex-col gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg">
        <div className="flex flex-col items-center gap-stack-sm py-section-lg text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">참석 여부를 보냈어요</p>
          <p className="text-body-md text-text-secondary">호스트에게 응답이 전달됐어요.</p>
        </div>
        <div className="flex flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
          <InfoRow type="spread" label="이름" value={name} />
          <InfoRow type="spread" label="참석 여부" value={status === "yes" ? "참석" : "불참"} />
          <InfoRow type="spread" label="동반 인원" value={`${companions}명`} />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg"
    >
      <div className="flex flex-col items-center gap-inline-compact text-center">
        <h2 className="text-heading-lg text-text-strong">참석 여부 알려주기</h2>
        <p className="text-body-md text-text-secondary">이름과 참석 여부를 남겨주세요.</p>
      </div>

      <Input
        label="이름"
        name="name"
        required
        maxLength={30}
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <fieldset className="flex flex-col gap-inline-md">
        <legend className="mb-inline-md">
          <Label as="span" required>
            참석 여부
          </Label>
        </legend>
        <div className="flex w-full items-center">
          <RadioOption
            label="참석"
            name="status"
            value="yes"
            checked={status === "yes"}
            onChange={() => setStatus("yes")}
            className="flex-1"
          />
          <RadioOption
            label="불참"
            name="status"
            value="no"
            checked={status === "no"}
            onChange={() => setStatus("no")}
            className="flex-1"
          />
        </div>
      </fieldset>

      <div className="flex flex-col gap-inline-md">
        <Label as="span" required>
          동반 인원
        </Label>
        <Stepper value={companions} onChange={setCompanions} />
        <p className="text-caption-md text-text-tertiary">본인을 제외하고 함께 오는 인원이에요.</p>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={name.trim() === ""}>
        참석 여부 보내기
      </Button>
    </form>
  );
}
