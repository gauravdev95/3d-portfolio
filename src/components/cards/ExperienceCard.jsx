import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  margin-top: 4px;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const DescriptionList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 4px 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "8px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <Top>
        <Image src={experience?.img} alt={experience?.company} />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>

      <Description>
        {Array.isArray(experience?.desc) ? (
          <DescriptionList>
            {experience.desc.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </DescriptionList>
        ) : (
          experience?.desc
        )}

        {experience?.skills && (
          <Skills>
            <b>Skills</b>
            <ItemWrapper>
              {experience.skills.map((skill) => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
