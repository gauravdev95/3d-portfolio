import { useEffect, useState } from "react";

const achievements = [
  {
    title: "DSA & Problem Solving",
    label: "800+ solved",
    text: "Solved 800+ Data Structures and Algorithms problems across LeetCode, GeeksforGeeks, and coding practice platforms, building strong foundations in arrays, trees, graphs, dynamic programming, and system-level problem solving.",
    proofImage: "/assets/Badge List.png",
  },
  {
    title: "WikiThon 2026",
    label: "Top 20",
    text: "Selected in the Top 20 at WikiThon 2026 by AI Valley and Harnoor Singh. Built DevRadar with Team Midnight Inference, an AI career intelligence platform powered by Groq, Claude AI, HydraDB, and live skill graph analysis.",
  },
  {
    title: "Byte Master 2024",
    label: "Rank 6",
    text: "Secured Rank 6 among 1000+ participants in Byte Master 2024, a coding challenge by Byte Club, CSE Department, Hindustan College of Science and Technology.",
  },
  {
    title: "600 Days Coding Streak",
    label: "600 Days",
    text: "Maintained a 600-day coding streak through consistent daily problem solving and algorithm practice, reflecting discipline, persistence, and long-term commitment to improvement.",
    proofGif: "/assets/Leetcode 600 day Beadge.gif",
  },
  {
    title: "Smart India Hackathon",
    label: "SIH 2025",
    text: "Built a full-stack AI-powered hiring platform to automate recruitment workflows for students and HR teams with resume screening, dashboards, and secure role-based access.",
  },
  {
    title: "MERN Stack Certificate",
    label: "Apna College",
    text: "Completed Full Stack Development training focused on MERN stack development, REST APIs, authentication, responsive UI development, and practical production-style workflows.",
  },
  {
    title: "AI Engineering Focus",
    label: "LLM + RAG",
    text: "Built portfolio projects with LLM agents, NLP workflows, RAG-style wiki grounding, Groq and Claude integrations, persistent memory, WebSocket feeds, and autonomous workflow recovery concepts.",
  },
];

const ProofIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3.75 7.75A2.75 2.75 0 0 1 6.5 5h11a2.75 2.75 0 0 1 2.75 2.75v8.5A2.75 2.75 0 0 1 17.5 19h-11a2.75 2.75 0 0 1-2.75-2.75v-8.5Z" />
    <path d="m7.5 14.5 2.4-2.4a1 1 0 0 1 1.4 0l1.95 1.95" />
    <path d="m13.5 14.25 1.1-1.1a1 1 0 0 1 1.4 0l1.5 1.5" />
    <circle cx="9" cy="9.25" r="1.25" />
  </svg>
);

const Achievement = () => {
  const [activeProof, setActiveProof] = useState(null);

  useEffect(() => {
    if (!activeProof) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProof(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeProof]);

  const openProof = (achievement) => {
    setActiveProof({
      title: achievement.title,
      src: achievement.proofGif || achievement.proofImage,
    });
  };

  const closeProof = () => setActiveProof(null);

  return (
    <>
      <style>{`
        .achievement-section {
          padding: 80px 10%;
          color: #ffffff;
          font-family: Poppins, sans-serif;
        }

        .achievement-title {
          text-align: center;
          font-size: 52px;
          font-weight: 600;
          margin: 0 0 16px;
        }

        .achievement-subtitle {
          max-width: 760px;
          margin: 0 auto 44px;
          text-align: center;
          color: #c9c3dc;
          font-size: 18px;
          line-height: 1.7;
        }

        .achievement-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .achievement-card {
          min-height: 230px;
          background: rgba(17, 25, 40, 0.83);
          border-radius: 8px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .achievement-card:hover {
          transform: translateY(-6px);
          box-shadow: rgba(168, 85, 247, 0.28) 0 14px 34px;
        }

        .achievement-card-header {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
        }

        .achievement-card h2 {
          font-size: 21px;
          line-height: 1.35;
          margin: 0;
          color: #ffffff;
        }

        .achievement-label {
          flex: 0 0 auto;
          border: 1px solid rgba(255, 183, 3, 0.42);
          color: #ffb703;
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .achievement-card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: #d7d3e6;
        }

        .achievement-proof-row {
          margin-top: auto;
          display: flex;
          justify-content: flex-start;
        }

        .achievement-proof-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(168, 85, 247, 0.35);
          background: rgba(255, 255, 255, 0.04);
          color: #f3ecff;
          border-radius: 999px;
          padding: 9px 14px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }

        .achievement-proof-button:hover {
          transform: translateY(-2px);
          border-color: rgba(168, 85, 247, 0.65);
          background: rgba(168, 85, 247, 0.12);
          box-shadow: rgba(168, 85, 247, 0.24) 0 10px 24px;
        }

        .achievement-proof-button svg {
          width: 16px;
          height: 16px;
          flex: 0 0 auto;
        }

        .achievement-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(8, 10, 20, 0.72);
          backdrop-filter: blur(10px);
          animation: achievementFadeIn 0.22s ease;
        }

        .achievement-modal {
          position: relative;
          width: min(920px, 100%);
          max-height: min(88vh, 900px);
          padding: 20px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(17, 25, 40, 0.95);
          box-shadow: rgba(15, 23, 42, 0.55) 0 28px 80px;
          animation: achievementScaleIn 0.24s ease;
        }

        .achievement-modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .achievement-modal-close:hover {
          transform: scale(1.06);
          background: rgba(168, 85, 247, 0.16);
          border-color: rgba(168, 85, 247, 0.45);
        }

        .achievement-modal-title {
          margin: 0 52px 16px 0;
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
        }

        .achievement-modal-media-wrap {
          width: 100%;
          max-height: calc(88vh - 110px);
          overflow: auto;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(10, 15, 27, 0.92);
        }

        .achievement-modal-media {
          display: block;
          width: 100%;
          max-width: 100%;
          max-height: calc(88vh - 140px);
          object-fit: contain;
          margin: 0 auto;
        }

        @keyframes achievementFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes achievementScaleIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .achievement-section {
            padding: 64px 16px;
          }

          .achievement-title {
            font-size: 32px;
          }

          .achievement-subtitle {
            font-size: 16px;
          }

          .achievement-card-header {
            flex-direction: column;
            gap: 10px;
          }

          .achievement-modal {
            padding: 16px;
            border-radius: 16px;
          }

          .achievement-modal-title {
            font-size: 18px;
            margin-right: 44px;
          }

          .achievement-modal-close {
            width: 36px;
            height: 36px;
            top: 10px;
            right: 10px;
          }

          .achievement-modal-media-wrap {
            max-height: calc(86vh - 90px);
          }

          .achievement-modal-media {
            max-height: calc(86vh - 120px);
          }
        }
      `}</style>

      <section className="achievement-section" id="Achievements">
        <h1 className="achievement-title">Achievements</h1>
        <p className="achievement-subtitle">
          Coding milestones, hackathon results, certifications, and applied AI
          engineering work that support my full-stack development journey.
        </p>

        <div className="achievement-container">
          {achievements.map((achievement) => {
            const hasProof = achievement.proofImage || achievement.proofGif;

            return (
              <div className="achievement-card" key={achievement.title}>
                <div className="achievement-card-header">
                  <h2>{achievement.title}</h2>
                  <span className="achievement-label">{achievement.label}</span>
                </div>
                <p>{achievement.text}</p>
                {hasProof ? (
                  <div className="achievement-proof-row">
                    <button
                      type="button"
                      className="achievement-proof-button"
                      onClick={() => openProof(achievement)}
                    >
                      <ProofIcon />
                      <span>View</span>
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      {activeProof ? (
        <div
          className="achievement-modal-overlay"
          onClick={closeProof}
          role="presentation"
        >
          <div
            className="achievement-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProof.title} proof`}
          >
            <button
              type="button"
              className="achievement-modal-close"
              onClick={closeProof}
              aria-label="Close proof modal"
            >
              ×
            </button>
            <h3 className="achievement-modal-title">{activeProof.title}</h3>
            <div className="achievement-modal-media-wrap">
              <img
                className="achievement-modal-media"
                src={activeProof.src}
                alt={`${activeProof.title} proof`}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Achievement;
