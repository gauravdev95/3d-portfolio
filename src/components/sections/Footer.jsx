import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { LinkedIn, Twitter, GitHub, Email } from "@mui/icons-material";
import { SiLeetcode } from "react-icons/si";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2.5rem 0 2rem;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(9, 9, 23, 0.6);
  backdrop-filter: blur(10px);
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 22px;
  background: linear-gradient(100deg, #fff 30%, #c084fc 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Tagline = styled.div`
  font-size: 13.5px;
  font-style: italic;
  color: ${({ theme }) => theme.text_secondary};
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  padding: 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.7rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.25s ease-in-out, transform 0.25s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  margin-top: 1.2rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  line-height: 1.7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Gaurav Yadav</Logo>
        <Tagline>"I build things that ship — not repos that sit."</Tagline>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Achievements">Achievements</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode />
          </SocialMediaIcon>
          <SocialMediaIcon href={`mailto:${Bio.email}`} aria-label="Email">
            <Email />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2026 Gaurav Yadav. All rights reserved.
          <br />
          Designed & built by hand — React, Three.js, and too much coffee.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
