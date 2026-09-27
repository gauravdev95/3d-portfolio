import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import SectionHeading from "../SectionHeading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const TimelineGlow = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 80%;
  background: linear-gradient(180deg, #854ce6, #ffb703, #854ce6);
  filter: blur(6px);
  opacity: 0.35;
  pointer-events: none;
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <SectionHeading
          kicker="Work so far"
          title="Where I've <g>worked</g>"
          subtitle="Internships, hackathons, and the teams I built with — each one taught me something I still use."
        />

        <div style={{ position: "relative", width: "100%" }}>
          <TimelineGlow />
          <VerticalTimeline lineColor="rgba(133, 76, 230, 0.35)">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Experience;
