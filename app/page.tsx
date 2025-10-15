import Header from "@/components/header"
import Hero from "@/components/hero"
import ExperienceTimeline from "@/components/experience-timeline"
import ProjectsGrid from "@/components/projects-grid"
import EducationList from "@/components/education-list"
import AboutMe from "@/components/about-me"
import SkillsSection from "@/components/skills-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceTimeline />
        <ProjectsGrid />
        <EducationList />
        <AboutMe />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
