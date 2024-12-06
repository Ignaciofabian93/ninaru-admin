import AuthGuard from "@/ui/authguard";
import PageLayout from "@/ui/layout";
import { MenuModule, LetterModule } from "./_components";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <PageLayout>
        <MenuModule />
        <LetterModule />
      </PageLayout>
    </AuthGuard>
  );
}
