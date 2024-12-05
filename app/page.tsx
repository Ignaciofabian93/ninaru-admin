import AuthGuard from "@/ui/authguard";

export default function Init() {
  return (
    <AuthGuard>
      <main>
        <h1>Init</h1>
      </main>
    </AuthGuard>
  );
}
