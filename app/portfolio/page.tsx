import HomeSlideshow from "@/components/HomeSlideshow";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return <HomeSlideshow projects={projects} />;
}
