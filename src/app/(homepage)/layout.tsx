import type { PropsWithChildren } from "react";
import { CommonLayout } from "@/components/layout/CommonLayout";
import { HeaderBase } from "@/features/header/components/HeaderBase";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <CommonLayout>
      <HeaderBase />
      {children}
    </CommonLayout>
  );
}
