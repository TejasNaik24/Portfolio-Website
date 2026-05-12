import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import EducationMain from "./components/educationSection/EducationMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import ResearchMain from "./components/researchSection/ResearchMain";
import PublicationsMain from "./components/publicationsSection/PublicationsMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <ResearchMain />
      <ExperienceMain />
      <EducationMain />
      <ProjectsMain />
      <PublicationsMain />
      <SkillsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
