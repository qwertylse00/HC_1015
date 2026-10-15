import type { ReactNode } from "react";
import Icon from "@/components/Icon";

type NavBarProps = {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
};

// 화면 상단 바. 양옆이 비면 빈 아이콘으로 자리만 차지한다.
export default function NavBar({ title, left, right }: NavBarProps) {
  return (
    <header className="flex h-65 w-full items-center gap-section p-page-horizontal">
      {left ?? <Icon name="none" />}
      <h1 className="min-w-0 flex-1 text-center text-heading-md text-text-primary">{title}</h1>
      {right ?? <Icon name="none" />}
    </header>
  );
}
