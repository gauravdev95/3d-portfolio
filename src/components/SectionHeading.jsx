import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrap = styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto 48px;
  padding: 0 20px;
`;

const Kicker = styled(motion.span)`
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 8px 18px;
  margin-bottom: 18px;
  border-radius: 999px;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary}55;
  background: ${({ theme }) => theme.primary}14;
`;

const Title = styled(motion.h2)`
  font-size: 52px;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 16px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const GradientWord = styled.span`
  background: linear-gradient(120deg, #a855f7 10%, #7c3aed 40%, #ffb703 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Sub = styled(motion.p)`
  font-size: 17px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ease = [0.22, 1, 0.36, 1];

// kicker: small pill label · title: supports <g>word</g> markup for gradient words
const SectionHeading = ({ kicker, title, subtitle }) => {
  const parts = String(title).split(/<g>|<\/g>/);

  return (
    <Wrap>
      {kicker && (
        <Kicker
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, ease }}
        >
          {kicker}
        </Kicker>
      )}
      <Title
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.7, delay: 0.08, ease }}
      >
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <GradientWord key={i}>{part}</GradientWord>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Title>
      {subtitle && (
        <Sub
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
        >
          {subtitle}
        </Sub>
      )}
    </Wrap>
  );
};

export default SectionHeading;
