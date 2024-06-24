import LandingHero from "@/components/landing-page/landing-hero";
import NavigationBar from "@/components/navigation-bar/navigation-bar";

export default function Home() {
  return (
    <main className="flex flex-col md:gap-[10rem] gap-[12rem]">
      <NavigationBar/>
      {/* hero Section */}
      <section className="absolute mt-[10rem]">
        <LandingHero/>
      </section>
    </main>
  );
}
