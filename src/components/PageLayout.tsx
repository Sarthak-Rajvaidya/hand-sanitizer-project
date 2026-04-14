import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen">
    <ParticleBackground />
    <Navbar />
    <main className="relative z-10 pt-16">
      {children}
    </main>
    <Footer />
  </div>
);

export default PageLayout;
