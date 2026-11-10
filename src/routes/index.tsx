import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

const TITLE = "Vinayaka B — Electronics and Communication Engineering Student";
const DESC = "Portfolio of Vinayaka B, ECE student at GM Institute of Technology exploring electronics, embedded systems, IoT, VLSI, robotics and hardware development.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: "/vinayaka-portrait.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/vinayaka-portrait.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero /><About /><Skills /><Projects /><Certifications /><Education /><Contact />
      </main>
      <Footer />
    </>
  );
}
