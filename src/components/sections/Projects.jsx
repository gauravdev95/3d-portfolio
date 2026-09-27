import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  padding: 0 16px 20px;
  position: relative;
  z-index: 1;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1150px;
`;

const Projects = () => {
  return (
    <Container id="Projects">
      <SectionHeading
        kicker="Selected work"
        title="Things I've <g>built</g>"
        subtitle="Every project here runs. Most are deployed, all are on GitHub — click any card for the full story of how it was built."
      />

      <CardContainer>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              delay: (index % 3) * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Projects;
