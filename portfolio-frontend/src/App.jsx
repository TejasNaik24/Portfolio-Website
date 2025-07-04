import "./App.css";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import HelperSection from "./components/HelperSection";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <HelperSection />
    </main>
  );
}

export default App;
