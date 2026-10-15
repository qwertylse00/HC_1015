// ISO 일시 → "2026년 11월 14일 (토) 09:00" (한국 시간)
export function formatDateTime(iso: string) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(iso));

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return `${get("year")}년 ${get("month")}월 ${get("day")}일 (${get("weekday")}) ${get("hour")}:${get("minute")}`;
}

// ISO 일시 → "10월 16일 12:30" (한국 시간, 응답 목록용)
export function formatShortDateTime(iso: string) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(iso));

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return `${get("month")}월 ${get("day")}일 ${get("hour")}:${get("minute")}`;
}
