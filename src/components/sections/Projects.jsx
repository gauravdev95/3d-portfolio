import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 0 16px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
`;

const Projects = () => {
  return (
    <Container id="Projects">
      <Title>Projects</Title>
      <Desc>
        Here are some of my projects. You can add more projects in the
        <code>projects</code> array in your constants file.
      </Desc>

      <CardContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Projects;
