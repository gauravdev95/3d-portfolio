import React, { useEffect, useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { motion, useScroll, useSpring } from "framer-motion";

const Nav = styled.nav`
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;
  background: ${({ $scrolled, theme }) =>
    $scrolled ? `${theme.bg}e6` : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(14px)" : "none")};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 8px 30px rgba(0, 0, 0, 0.35)" : "none"};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent"};
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2.5px;
  transform-origin: 0%;
  background: linear-gradient(90deg, #854ce6, #a855f7, #ffb703);
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkR)`
  font-size: 21px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.4px;
  transition: all 0.3s ease;
  background: linear-gradient(100deg, #fff 30%, #c084fc 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &:hover {
    filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.7));
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 15px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  padding: 6px 0;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #ffb703);
    transition: width 0.3s ease;
    border-radius: 10px;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:hover::after {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  padding: 10px 24px;
  border-radius: 999px;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.35s ease;

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #9b5cff);
    color: white;
    box-shadow: 0 10px 30px rgba(123, 97, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled(motion.ul)`
  position: absolute;
  top: 76px;
  right: 0;
  width: 100%;
  padding: 26px 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  background: rgba(12, 12, 24, 0.92);
  backdrop-filter: blur(16px);
  border-radius: 0 0 24px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5);
`;

const LINKS = [
  ["About", "#About"],
  ["Skills", "#Skills"],
  ["Experience", "#Experience"],
  ["Projects", "#Projects"],
  ["Achievements", "#Achievements"],
  ["Education", "#Education"],
  ["Contact", "#Contact"],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <NavbarContainer>
        <NavLogo to="/">Gaurav Yadav</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseRounded /> : <MenuRounded />}
        </MobileIcon>

        <NavItems>
          {LINKS.map(([label, href]) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </NavItems>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank" rel="noreferrer">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>

      {isOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {LINKS.map(([label, href]) => (
            <NavLink key={href} onClick={() => setIsOpen(false)} href={href}>
              {label}
            </NavLink>
          ))}
          <GithubButton
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
            style={{ background: theme.primary, color: "#fff", textAlign: "center" }}
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
      )}

      <ProgressBar style={{ scaleX }} />
    </Nav>
  );
};

export default Navbar;
