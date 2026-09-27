import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "../../data/constants";
import SectionHeading from "../SectionHeading";

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

const TrophyIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 22, height: 22 }}
  >
    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4a1 1 0 0 0-1 1c0 2.5 2 4.5 4.5 4.5M17 6h3a1 1 0 0 1 1 1c0 2.5-2 4.5-4.5 4.5" />
  </svg>
);

const Achievement = () => {
  const [activeProof, setActiveProof] = useState(null);

  useEffect(() => {
    if (!activeProof) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveProof(null);
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

  return (
    <>
      <style>{`
        .achievement-section {
          padding: 70px 10% 30px;
          color: #ffffff;
          font-family: Poppins, sans-serif;
        }

        .achievement-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .achievement-card {
          min-height: 235px;
          background: rgba(17, 25, 40, 0.83);
          border-radius: 18px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .achievement-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #a855f7, #ffb703);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-8px);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: rgba(168, 85, 247, 0.28) 0 16px 40px;
        }

        .achievement-card:hover::after {
          opacity: 1;
        }

        .achievement-card-header {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          align-items: flex-start;
        }

        .achievement-card h2 {
          font-size: 20px;
          line-height: 1.35;
          margin: 0;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .achievement-trophy {
          color: #ffb703;
          flex: 0 0 auto;
          display: inline-flex;
        }

        .achievement-label {
          flex: 0 0 auto;
          border: 1px solid rgba(255, 183, 3, 0.42);
          color: #ffb703;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          background: rgba(255, 183, 3, 0.06);
        }

        .achievement-card p {
          margin: 0;
          font-size: 14.5px;
          line-height: 1.7;
          color: #d7d3e6;
        }

        .achievement-proof-row {
          margin-top: auto;
          display: flex;
          justify-content: flex-start;
          padding-top: 6px;
        }

        .achievement-proof-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(168, 85, 247, 0.35);
          background: rgba(255, 255, 255, 0.04);
          color: #f3ecff;
          border-radius: 999px;
          padding: 9px 16px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }

        .achievement-proof-button:hover {
          transform: translateY(-2px);
          border-color: rgba(168, 85, 247, 0.65);
          background: rgba(168, 85, 247, 0.14);
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
          background: rgba(8, 10, 20, 0.78);
          backdrop-filter: blur(10px);
        }

        .achievement-modal {
          position: relative;
          width: min(920px, 100%);
          max-height: min(88vh, 900px);
          padding: 22px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(17, 25, 40, 0.97);
          box-shadow: rgba(15, 23, 42, 0.55) 0 28px 80px;
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
          transform: scale(1.06) rotate(90deg);
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

        @media (max-width: 768px) {
          .achievement-section {
            padding: 56px 16px 20px;
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
        }
      `}</style>

      <section className="achievement-section" id="Achievements">
        <SectionHeading
          kicker="Proof of work"
          title="Things that <g>actually happened</g>"
          subtitle="Milestones, ranks, and streaks — the receipts behind the claims. Some even come with screenshots."
        />

        <div className="achievement-container">
          {achievements.map((achievement, i) => {
            const hasProof = achievement.proofImage || achievement.proofGif;
            return (
              <motion.div
                className="achievement-card"
                key={achievement.title}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="achievement-card-header">
                  <h2>
                    <span className="achievement-trophy">
                      <TrophyIcon />
                    </span>
                    {achievement.title}
                  </h2>
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
                      <span>View proof</span>
                    </button>
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {activeProof && (
          <motion.div
            className="achievement-modal-overlay"
            onClick={() => setActiveProof(null)}
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="achievement-modal"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${activeProof.title} proof`}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="achievement-modal-close"
                onClick={() => setActiveProof(null)}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Achievement;
