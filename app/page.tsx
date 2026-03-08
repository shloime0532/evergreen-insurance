import ScrollHero from "./components/scroll-hero";
import LogoCloud from "./components/logo-cloud";
import PinnedServices from "./components/pinned-services";
import CounterStats from "./components/counter-stats";
import Testimonials from "./components/testimonials";
import CtaBanner from "./components/cta-banner";

export default function Home() {
  return (
    <>
      <ScrollHero />
      <LogoCloud />
      <PinnedServices />
      <CounterStats />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
