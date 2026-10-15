type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  // inverse: 어두운 배경 위(InvitationCover)에서 흰 글자로
  tone?: "default" | "inverse";
};

// 섹션 제목 묶음. 넘기지 않은 줄은 표시하지 않는다.
export default function SectionHeader({
  subtitle,
  title,
  description,
  tone = "default",
}: SectionHeaderProps) {
  const isInverse = tone === "inverse";
  return (
    <div className="flex w-full flex-col items-center gap-stack-md text-center">
      {subtitle && (
        <p
          className={`w-full text-label-md ${
            isInverse ? "text-text-inverse opacity-60" : "text-action-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
      {title && (
        <h2
          className={`w-full text-title-lg whitespace-pre-line ${
            isInverse ? "text-text-inverse" : "text-text-primary"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`w-full text-body-md ${isInverse ? "text-text-inverse" : "text-text-primary"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
