import React from "react";
import styled from "styled-components";
import { Bio, stats } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Counter from "../Counter";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 90px 30px 70px;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 70px 16px 50px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 96%, 0 100%);
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  animation: orb-drift 14s ease-in-out infinite;
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1150px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  max-width: 600px;

  @media (max-width: 960px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
`;

const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #d8f3e6;
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.35);
  margin-bottom: 22px;
`;

const StatusDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #34d399;
  animation: pulse-dot 2s infinite;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 58px;
  line-height: 1.12;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 6px;
  letter-spacing: -0.5px;

  @media (max-width: 960px) {
    font-size: 42px;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 34px;
  }
`;

const NameGradient = styled.span`
  background: linear-gradient(100deg, #c084fc 0%, #854ce6 35%, #ffb703 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Tagline = styled.div`
  font-size: 17px;
  font-style: italic;
  color: ${({ theme }) => theme.primary};
  opacity: 0.9;
  margin: 10px 0 4px;
  font-weight: 500;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 30px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6;
  margin: 8px 0 4px;
  min-height: 52px;

  @media (max-width: 960px) {
    justify-content: center;
    font-size: 22px;
    text-align: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2px;
    align-items: center;
    font-size: 18px;
    min-height: 70px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  white-space: nowrap;
`;

const SubTitle = styled.p`
  font-size: 17px;
  line-height: 1.85;
  margin: 18px 0 34px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 400;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 15.5px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 46px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  text-decoration: none;
  padding: 15px 38px;
  background: linear-gradient(225deg, #945dd6 0%, #7c3aed 60%, #6d28d9 100%);
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border: none;
  box-shadow: 0 12px 34px rgba(133, 76, 230, 0.45);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 18px 44px rgba(133, 76, 230, 0.6);
  }
`;

const GhostButton = styled.a`
  text-decoration: none;
  padding: 15px 38px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}1f;
    box-shadow: 0 12px 30px rgba(133, 76, 230, 0.3);
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 560px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 6px 14px 16px;
  border-left: 2px solid ${({ theme }) => theme.primary}66;
`;

const StatValue = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 640px) {
    font-size: 23px;
  }
`;

const StatLabel = styled.div`
  font-size: 12.5px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.45;
`;

/* ---------- photo frame ---------- */

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: center;
  position: relative;

  @media (min-width: 961px) {
    /* optical lift: centers the photo against the headline block */
    margin-bottom: 56px;
  }

  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 26px;
  }
`;

const FrameWrap = styled.div`
  position: relative;
  width: 340px;
  filter: drop-shadow(0 26px 54px rgba(0, 0, 0, 0.55));

  @media (max-width: 640px) {
    width: 270px;
  }
`;

/* thin rotating arc ring orbiting outside the photo frame */
const FrameOrbit = styled.div`
  position: absolute;
  inset: -17px;
  border-radius: 40px;
  padding: 2px;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(168, 85, 247, 0.95) 10%,
    transparent 24%,
    transparent 54%,
    rgba(34, 211, 238, 0.95) 64%,
    transparent 78%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: spin-slow 11s linear infinite;
  opacity: 0.85;
  pointer-events: none;
`;

const FrameGlow = styled.div`
  position: absolute;
  inset: 8%;
  border-radius: 34px;
  background: linear-gradient(135deg, #854ce6, #22d3ee);
  filter: blur(46px);
  opacity: 0.5;
  animation: orb-drift 10s ease-in-out infinite;
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 0.94;
  object-fit: cover;
  object-position: top center;
  border-radius: 26px;
  display: block;
  background: #141428;
`;

const Chip = styled(motion.div)`
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 13px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: #fff;
  background: rgba(10, 12, 28, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.45);
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 10px;
    padding: 6px 10px;
    gap: 5px;
  }
`;

const BadgeDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(p) => p.color || "#a855f7"};
  box-shadow: 0 0 12px ${(p) => p.color || "#a855f7"};
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  max-width: 1360px;
  margin: 0 auto;
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <Orb
          style={{
            width: 420,
            height: 420,
            top: "-120px",
            left: "-120px",
            background: "radial-gradient(circle, #7c3aed55 0%, transparent 70%)",
          }}
        />
        <Orb
          style={{
            width: 380,
            height: 380,
            bottom: "-140px",
            right: "-100px",
            background: "radial-gradient(circle, #0891b244 0%, transparent 70%)",
            animationDelay: "-6s",
          }}
        />

        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <motion.div
          {...headContainerAnimation}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <StatusPill>
                  <StatusDot />
                  Open to opportunities
                </StatusPill>
                <Title>
                  Hi, I'm <NameGradient>{Bio.name}</NameGradient>
                </Title>
                <Tagline>"{Bio.tagline}"</Tagline>
                <TextLoop>
                  I work as a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 40,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
                <ButtonRow>
                  <PrimaryButton href={Bio.resume} target="_blank" rel="noreferrer">
                    Check Resume
                  </PrimaryButton>
                  <GhostButton href="#Contact">Let's Talk</GhostButton>
                </ButtonRow>
                <StatsRow>
                  {stats.map((s) => (
                    <Stat key={s.label}>
                      <StatValue>
                        {s.prefix}
                        <Counter to={s.value} suffix={s.suffix} />
                      </StatValue>
                      <StatLabel>{s.label}</StatLabel>
                    </Stat>
                  ))}
                </StatsRow>
              </motion.div>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div
                {...headContentAnimation}
                className="animate-floaty-soft"
                style={{ position: "relative", zIndex: 2 }}
              >
                <Tilt
                  options={{ max: 12, scale: 1.03, speed: 500 }}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <FrameWrap>
                    <FrameGlow />
                    <FrameOrbit />
                    <div className="gradient-ring">
                      <Img src={HeroImg} alt="Gaurav Yadav" />
                    </div>
                    <Chip
                      style={{ top: "14px", left: "14px" }}
                      className="animate-floaty"
                      initial={{ opacity: 0, y: -14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <BadgeDot color="#22d3ee" />
                      LLM Agents & RAG
                    </Chip>
                    <Chip
                      style={{ top: "14px", right: "14px", animationDelay: "-1.8s" }}
                      className="animate-floaty"
                      initial={{ opacity: 0, y: -14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                    >
                      <BadgeDot color="#a855f7" />
                      AI/ML Engineer
                    </Chip>
                    <Chip
                      style={{ bottom: "14px", left: "14px", animationDelay: "-3.4s" }}
                      className="animate-floaty"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                    >
                      <BadgeDot color="#34d399" />
                      Full-Stack Developer
                    </Chip>
                    <Chip
                      style={{ bottom: "14px", right: "14px", animationDelay: "-4.6s" }}
                      className="animate-floaty chip-lift"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <BadgeDot color="#ffb703" />
                      800+ DSA Solved
                    </Chip>
                  </FrameWrap>
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
