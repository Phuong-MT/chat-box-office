import { Suspense } from "react";
import MainLayout from "./MainLayout";
interface BaseLayoutProps {
  children: React.ReactNode;
  scrollableContent?: boolean;
}

const BaseLayout = ({
  children,
  scrollableContent = true,
}: BaseLayoutProps) => {
  return (
    <MainLayout scrollableContent={scrollableContent}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </MainLayout>
  );
};

export default BaseLayout;
