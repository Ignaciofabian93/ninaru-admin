import AuthGuard from "@/ui/authguard";
import PageLayout from "@/ui/layout";
import MenuModule from "./_components/menu";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <PageLayout>
        <MenuModule />
      </PageLayout>
    </AuthGuard>
  );
}
