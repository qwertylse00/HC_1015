// 화면 확인용 가짜 데이터. Supabase를 연결하면 이 파일 대신 DB에서 가져온다.

export type Invitation = {
  id: string; // 추측하기 어려운 고유 ID (crypto.randomUUID())
  title: string;
  startsAt: string; // 일시 (ISO 형식, 한국 시간)
  location: string; // 주소를 글자로만 표시
  body: string; // 입력한 줄바꿈을 그대로 보여준다
  createdAt: string;
};

export type Rsvp = {
  id: string;
  invitationId: string;
  name: string;
  status: "yes" | "no"; // yes 참석 · no 불참
  companions: number; // 본인 제외 동반 인원. 불참이면 0
  createdAt: string;
};

export const mockInvitation: Invitation = {
  id: "7f3c9a2e-4b1d-4e8a-9c6f-2d5b8e1a0f47",
  title: "허들링 클럽 2번째\n오프라인 밋업",
  startsAt: "2026-11-14T09:00:00+09:00",
  location: "세종 남극 기지",
  body: "추운 겨울, 함께 모여 온기를 나눠요.\n간단한 다과와 굿즈가 준비되어 있어요.\n\n편하게 오세요!",
  createdAt: "2026-10-15T10:00:00+09:00",
};

// 참석 2명(그중 1명은 동반 1명) · 불참 1명
// → 참석 2 · 불참 1 · 참석 인원 합계 3명
export const mockRsvps: Rsvp[] = [
  {
    id: "b2e8d4f1-6a3c-4f9e-8b7d-1c5a9e3f2d60",
    invitationId: mockInvitation.id,
    name: "김허들",
    status: "yes",
    companions: 1,
    createdAt: "2026-10-16T12:30:00+09:00",
  },
  {
    id: "c9a1f7e3-2d8b-4c6a-9e4f-7b3d1a5c8e92",
    invitationId: mockInvitation.id,
    name: "이펭귄",
    status: "yes",
    companions: 0,
    createdAt: "2026-10-17T08:15:00+09:00",
  },
  {
    id: "d4f6b8a2-9e1c-4a7d-8f3b-5c2e7a9d1b34",
    invitationId: mockInvitation.id,
    name: "박남극",
    status: "no",
    companions: 0,
    createdAt: "2026-10-18T21:40:00+09:00",
  },
];
