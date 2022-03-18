import { AboutByIndex } from "src/components/AboutByIndex";
import { ContactByIndex } from "src/components/ContactByIndex";
import { FirstView } from "src/components/FirstVew";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Topics } from "src/components/Topics";
import { WorksAndCulture } from "src/components/WorksAndCulture";
import Contact from "src/pages/contact";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <FirstView id="Index" />
        <AboutByIndex />
        <WorksAndCulture />
        <Topics />
        <ContactByIndex />
      </main>
      <Footer />
    </div>
  );
}
