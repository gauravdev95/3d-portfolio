import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Card = styled.div`
  width: 330px;
  min-height: 460px;
  background: rgba(17, 25, 40, 0.9);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 0;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1.5px;
    background: linear-gradient(135deg, #a855f7, transparent 40%, transparent 60%, #ffb703);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 24px 60px rgba(133, 76, 230, 0.35);
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
  flex: 0 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(9, 9, 23, 0.85) 100%);
`;

const Body = styled.div`
  padding: 22px 22px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.35;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex: 1;
`;

const TechRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const TechChip = styled.span`
  font-size: 11.5px;
  font-weight: 600;
  color: #d9c8ff;
  background: rgba(133, 76, 230, 0.16);
  border: 1px solid rgba(133, 76, 230, 0.3);
  padding: 4px 10px;
  border-radius: 999px;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Links = styled.div`
  display: flex;
  gap: 14px;
`;

const IconBtn = styled.a`
  color: #c4b5fd;
  font-size: 19px;
  display: inline-flex;
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: #ffb703;
    transform: translateY(-2px) scale(1.12);
  }
`;

const DetailsBtn = styled.span`
  font-size: 13.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.25s ease, color 0.25s ease;

  ${Card}:hover & {
    gap: 10px;
    color: #c084fc;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(5, 5, 14, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 20px;
`;

const ModalBox = styled(motion.div)`
  width: 92%;
  max-width: 640px;
  max-height: 88vh;
  overflow-y: auto;
  background: #12081f;
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 22px;
  color: white;
  position: relative;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6), 0 0 60px rgba(133, 76, 230, 0.18);
`;

const ModalImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`;

const ModalBody = styled.div`
  padding: 28px 30px 32px;

  h2 {
    margin: 0 0 14px;
    font-size: 25px;
    line-height: 1.3;
  }

  p {
    font-size: 15px;
    line-height: 1.85;
    color: #cfc9e3;
    margin: 0;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease;

  &:hover {
    transform: rotate(90deg) scale(1.08);
    background: rgba(168, 85, 247, 0.4);
  }
`;

const Tech = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0 6px;

  span {
    background: rgba(168, 85, 247, 0.16);
    border: 1px solid rgba(168, 85, 247, 0.35);
    color: #e3d2ff;
    padding: 6px 13px;
    border-radius: 999px;
    font-size: 12.5px;
    font-weight: 600;
  }
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 24px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 22px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  a.primary {
    background: linear-gradient(135deg, #854ce6, #6d28d9);
    color: #fff;
    box-shadow: 0 8px 24px rgba(133, 76, 230, 0.4);
  }

  a.ghost {
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #fff;
  }

  a:hover {
    transform: translateY(-2px);
  }
`;

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open ]);

  return (
    <>
      <Card onClick={() => setOpen(true)}>
        <ImageWrap>
          <Image src={project.image} alt={project.title} loading="lazy" />
          <ImageOverlay />
        </ImageWrap>

        <Body>
          <Title>{project.title}</Title>
          <Desc>{project.description}</Desc>
          <TechRow>
            {project.tech.slice(0, 4).map((t) => (
              <TechChip key={t}>{t}</TechChip>
            ))}
            {project.tech.length > 4 && (
              <TechChip>+{project.tech.length - 4} more</TechChip>
            )}
          </TechRow>
          <CardFooter>
            <Links onClick={(e) => e.stopPropagation()}>
              <IconBtn href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </IconBtn>
              {project.live && (
                <IconBtn href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                  <FaExternalLinkAlt />
                </IconBtn>
              )}
            </Links>
            <DetailsBtn>
              Full story <span aria-hidden="true">→</span>
            </DetailsBtn>
          </CardFooter>
        </Body>
      </Card>

      <AnimatePresence>
        {open && (
          <Modal
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ModalBox
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <CloseBtn onClick={() => setOpen(false)} aria-label="Close">
                ×
              </CloseBtn>
              <ModalImage src={project.image} alt={project.title} />
              <ModalBody>
                <h2>{project.title}</h2>
                <p>{project.details}</p>
                <Tech>
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </Tech>
                <ModalLinks>
                  <a className="primary" href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> View on GitHub
                  </a>
                  {project.live && (
                    <a className="ghost" href={project.live} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </ModalLinks>
              </ModalBody>
            </ModalBox>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
