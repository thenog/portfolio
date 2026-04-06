import HomeSlideshow from "@/components/HomeSlideshow";
import { projects } from "@/data/projects";

export default function HomePage() {
  return <HomeSlideshow projects={projects} />;
}
