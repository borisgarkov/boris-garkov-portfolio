import React from "react";
import {
    AboutSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
    return (
        <>
            <Seo title="Boris Garkov Portfolio Website" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={[]} /> */}
                <AboutSection sectionId="about" heading="About me" />
                <InterestsSection sectionId="skills" heading="Technical Skills" />
                <ProjectsSection sectionId="projects" heading="Latest Projects" />
                <ContactSection sectionId="contact" heading="Contact?" />
            </Page>
        </>
    );
}
