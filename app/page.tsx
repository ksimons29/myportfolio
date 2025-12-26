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
import { content } from '@/lib/content'

export default function Home() {
  return (
    <main className="min-h-screen bg-paper dark:bg-[#1a1a1a] transition-colors duration-300">
      {/* 1. Hero/Landing Section */}
      <Header />

      {/* 2. About Section */}
      <Section id="about" title="About">
        <AboutSection />
      </Section>

      {/* Projects Section (Current Work + Selected Outcomes) */}
      <Section id="projects" title="Current Work" className="bg-paper-warm dark:bg-[#222222]">
        {content.currentWork.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Section>

      <Section id="outcomes" title="Selected Outcomes">
        {content.selectedOutcomes.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Section>

      {/* 3. Experience Section */}
      <Section id="experience" title="Experience" className="bg-paper-warm dark:bg-[#222222]">
        <div className="mt-4">
          {content.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Section>

      {/* 6. Skills Section */}
      <Section id="skills" title="Core Skills">
        <SkillsGrid />
      </Section>

      {/* 5. Education Section */}
      <Section id="education" title="Education & Upskilling" className="bg-paper-warm dark:bg-[#222222]">
        {content.education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </Section>

      {/* Languages (bonus section) */}
      <Section id="languages" title="Languages">
        <div className="max-w-md">
          {content.languages.map((lang, index) => (
            <LanguageBar key={index} language={lang} />
          ))}
        </div>
      </Section>

      {/* Beyond Work (bonus section) */}
      <Section id="beyond-work" title="Beyond Work" className="bg-paper-warm dark:bg-[#222222]">
        <BeyondWork />
      </Section>

      {/* 7. Contact Section (Footer) */}
      <Footer />

      {/* Floating LLYLI Widget */}
      <LLYLIWidget />
    </main>
  )
}
