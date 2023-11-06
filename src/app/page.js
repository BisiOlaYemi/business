import HeroContent from "@/components/HeroSection/heroContent";
import Sectionslider from "@/components/Sectionslider";
import ContentPart from "@/components/HeroSection/contentPart";
import PromoteCards from "@/components/HeroCards/promoteCards";
import HerocontentBelow from "@/components/HeroSection/herocontentBelow";
import Layout from "@/components/Layout/layout";
import AdConsultation from "@/components/HeroSection/adConsultation";
import PlacioStrategy from "@/components/HeroSection/placioStrategy";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroContent />
        <Sectionslider />
        <ContentPart />
        <PromoteCards />
        <HerocontentBelow />
        <PlacioStrategy />
        <AdConsultation />
      </Layout>
    </>
  );
}
