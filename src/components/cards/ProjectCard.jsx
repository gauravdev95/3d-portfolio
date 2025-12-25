import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* ================= CARD ================= */

const Card = styled.div`
  width: 320px;
  height: 420px; /* ✅ FIXED SIZE */
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 18px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(168, 85, 247, 0.45);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
`;

const Title = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 12px;
`;

const Desc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;

  /* ✅ keep text short */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Links = styled.div`
  display: flex;
  gap: 16px;
`;

const IconBtn = styled.a`
  color: #ffb703;
  font-size: 20px;

  &:hover {
    color: white;
    transform: scale(1.15);
  }
`;

/* ================= MODAL ================= */

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 600px;
  background: #14001f;
  padding: 30px;
  border-radius: 18px;
  color: white;
`;

const Tech = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 16px 0;

  span {
    background: #a855f7;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 13px;
  }
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    color: #ffb703;
    font-weight: 600;
  }
`;

/* ================= COMPONENT ================= */

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* PREVIEW CARD */}
      <Card onClick={() => setOpen(true)}>
        <Image src={project.image} alt={project.title} />

        <div>
          <Title>{project.title}</Title>
          <Desc>{project.description}</Desc>
        </div>

        <Links onClick={(e) => e.stopPropagation()}>
          <IconBtn href={project.github} target="_blank">
            <FaGithub />
          </IconBtn>
          <IconBtn href={project.live} target="_blank">
            <FaExternalLinkAlt />
          </IconBtn>
        </Links>
      </Card>

      {/* FULL DETAILS MODAL */}
      {open && (
        <Modal onClick={() => setOpen(false)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <h2>{project.title}</h2>
            <p>{project.details}</p>

            <Tech>
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </Tech>

            <ModalLinks>
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Live Demo</a>
            </ModalLinks>
          </ModalBox>
        </Modal>
      )}
    </>
  );
};

export default ProjectCard;
