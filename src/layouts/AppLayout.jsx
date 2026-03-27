import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] p-4 md:p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
