import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#14354a] text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] bg-[#f2f3f5] p-4 md:p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
