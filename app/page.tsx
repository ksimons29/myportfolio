import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import AboutSection from '@/components/AboutSection'
import ProjectCard from '@/components/ProjectCard'
import ExperienceCard from '@/components/ExperienceCard'
import SkillsGrid from '@/components/SkillsGrid'
import EducationCard from '@/components/EducationCard'
import LanguageBar from '@/components/LanguageBar'
import BeyondWork from '@/components/BeyondWork'
import LLYLIWidget from '@/components/LLYLIWidget'
import ProfileCards from '@/components/ProfileCards'
import AvailabilitySection from '@/components/AvailabilitySection'
import { content } from '@/lib/content'

export default function Home() {
  return (
    <main className="min-h-screen bg-paper transition-colors duration-300">
      {/* 1. Hero/Landing Section */}
      <Header />

      {/* 2. About Section */}
      <Section id="about" title="About">
        <AboutSection />
      </Section>

      {/* 3. Capability Cards - Expandable with examples */}
      <ProfileCards />

      {/* 4. Current Work (LLYLI) */}
      <Section id="projects" title="Current Work" className="bg-paper-warm">
        {content.currentWork.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Section>

      {/* 5. Selected Outcomes */}
      <Section id="outcomes" title="Selected Outcomes">
        {content.selectedOutcomes.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Section>

      {/* 6. Experience */}
      <Section id="experience" title="Experience" className="bg-paper-warm">
        <div className="mt-4">
          {content.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Section>

      {/* 7. Core Skills */}
      <Section id="skills" title="Core Skills">
        <SkillsGrid />
      </Section>

      {/* 8. Education & Upskilling */}
      <Section id="education" title="Education & Upskilling" className="bg-paper-warm">
        {content.education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </Section>

      {/* 9. Languages */}
      <Section id="languages" title="Languages">
        <div className="max-w-md">
          {content.languages.map((lang, index) => (
            <LanguageBar key={index} language={lang} />
          ))}
        </div>
      </Section>

      {/* 10. Beyond Work */}
      <Section id="beyond-work" title="Beyond Work" className="bg-paper-warm">
        <BeyondWork />
      </Section>

      {/* 11. Open to Work */}
      <AvailabilitySection />

      {/* 12. Footer */}
      <Footer />

      {/* Floating LLYLI Widget */}
      <LLYLIWidget />
    </main>
  )
}
