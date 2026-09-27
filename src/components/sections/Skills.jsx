import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0 20px;
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

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 40px;
  justify-content: center;
  padding: 0 16px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 20px;
  padding: 24px 36px;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -80%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      105deg,
      transparent,
      rgba(168, 85, 247, 0.14),
      transparent
    );
    transform: skewX(-20deg);
    transition: left 0.7s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(168, 85, 247, 0.45);
    box-shadow: 0 20px 50px rgba(133, 76, 230, 0.28);
  }

  &:hover::before {
    left: 130%;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 28px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 14px 24px;
  }
`;

const SkillTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(100deg, #e9d5ff, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 14px;
`;

const SkillItem = styled(motion.div)`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  cursor: default;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}1c;
    transform: translateY(-3px) scale(1.04);
  }

  @media (max-width: 768px) {
    font-size: 13.5px;
    padding: 8px 12px;
  }
`;

const SkillImage = styled.img`
  width: 23px;
  height: 23px;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <SectionHeading
          kicker="My toolbox"
          title="What I <g>build</g> with"
          subtitle="This is the stack I reach for on real projects — not a keyword list. If it's here, I've shipped something with it."
        />

        <SkillsContainer>
          {skills.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: (index % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Tilt options={{ max: 8, scale: 1.015, speed: 400 }}>
                <Skill>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills.map((item, index_x) => (
                      <SkillItem
                        key={`skill-x-${index_x}`}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <SkillImage
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          style={item.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        {item.name}
                      </SkillItem>
                    ))}
                  </SkillList>
                </Skill>
              </Tilt>
            </motion.div>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
