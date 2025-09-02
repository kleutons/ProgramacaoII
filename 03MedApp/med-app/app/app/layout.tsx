import Footer from "@/src/components/ui/Footer";
import Header from "@/src/components/ui/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0C1115] text-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 xl:px-0  py-10">{children}</main>
      <Footer />
    </div>
  );
}
