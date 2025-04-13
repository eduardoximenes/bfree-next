export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-100">Sidebar</aside>
        <main className="flex-1 p-4">{children}</main>
      </div>
    );
  }
  