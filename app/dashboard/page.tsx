import AuthGuard from "@/ui/authguard";
import PageLayout from "@/ui/layout";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <PageLayout>
        <h1>Dashboard</h1>
      </PageLayout>
    </AuthGuard>
  );
}
