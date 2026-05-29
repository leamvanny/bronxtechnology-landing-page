import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#0B0F19] text-white">
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#0B0F19] py-8 text-white">
        {/* Top Glow */}
        <div className="absolute top-[-120px] left-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Bottom Glow */}
        <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-3xl"></div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto p-4">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
