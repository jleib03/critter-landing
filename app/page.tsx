import LandingPage from "@/app/components/marketing/LandingPage";
import { generatedFeaturedArticles } from "@/lib/blog/generated-articles";

export default function Home() {
  return <LandingPage blogArticles={generatedFeaturedArticles} />;
}
