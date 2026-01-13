import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";


// ================= NAVBAR =================

const Nav = styled.div`
  background: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`;

/* ================= CONTAINER ================= */

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* ================= LOGO ================= */

const NavLogo = styled(LinkR)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 0.6px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    text-shadow: 0 0 12px ${({ theme }) => theme.primary};
  }
`;

/* ================= NAV ITEMS ================= */

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* ================= NAV LINK ================= */

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
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
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      #9b5cff
    );
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

/* ================= BUTTON ================= */

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease;

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary},
      #9b5cff
    );
    color: white;
    box-shadow: 0 10px 30px rgba(123, 97, 255, 0.5);
    transform: translateY(-2px) scale(1.03);
  }
`;

/* ================= MOBILE ICON ================= */

const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

/* ================= MOBILE MENU ================= */

const MobileMenu = styled.ul`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  list-style: none;

  background: rgba(20, 20, 30, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 0 0 24px 24px;

  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-20px)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  transition: all 0.4s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;


// Navbar component to display navigation bar with links and responsive menu
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">GauravYadav</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(false)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Education">
              Education
            </NavLink>

            <GithubButton
              href={Bio.github}
              target="_blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
