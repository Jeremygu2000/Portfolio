import { Header } from "@/app/_components/Header";
import { Hero } from "@/app/_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import {Footer} from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <Hero />

      <Spacing size="md" />

      <Status />

      <Spacing size="md" />

      <Skills />

      <Spacing size="md" />
      
      <Footer />
    </main>
  );
}
