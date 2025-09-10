import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Tokenomics from "@/components/tokenomics";
import HowToBuy from "@/components/how-to-buy";
import Roadmap from "@/components/roadmap";
import FAQ from "@/components/faq";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-ftf-purple min-h-screen">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
