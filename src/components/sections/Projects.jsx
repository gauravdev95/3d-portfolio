import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding: 0 16px;
`;

const Title = styled.h2`
  font-size: 52px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 20px 0 40px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
`;

// Projects section component to showcase various projects
const Projects = () => {
  return (
    <Container id="Projects">
      <Title>Projects</Title>
      <Desc>
        A collection of real-world projects showcasing Full Stack development,
        system design thinking, and AI integration.
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
