import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const subjects = [
  {
    code: "DB",
    title: "DBMS",
    rating: 4.5,
    level: "90%",
    text: "Database design, normalization, transactions, indexing, SQL — the stuff behind every schema I've drawn and every slow query I've fixed.",
  },
  {
    code: "OS",
    title: "Operating Systems",
    rating: 4.0,
    level: "80%",
    text: "Processes, threads, scheduling, deadlocks, memory management. Shows up whenever I debug why a backend is acting weird.",
  },
  {
    code: "OOP",
    title: "OOPs",
    rating: 4.5,
    level: "90%",
    text: "Encapsulation, inheritance, polymorphism, abstraction — and more importantly, knowing when not to over-engineer with them.",
  },
  {
    code: "CN",
    title: "Computer Networks",
    rating: 4.0,
    level: "80%",
    text: "OSI/TCP-IP, HTTP/HTTPS, DNS, client-server communication. Basically the reason my APIs work over the internet at all.",
  },
  {
    code: "SD",
    title: "System Design",
    rating: 4.0,
    level: "80%",
    text: "REST APIs, databases, caching, load balancing basics, real-time event flows. I think in systems now, not just endpoints.",
  },
];

const Stars = ({ value }) => (
  <span className="theory-stars" aria-label={`${value} out of 5 stars`}>
    <span className="theory-stars-bg">{"★".repeat(5)}</span>
    <span
      className="theory-stars-fg"
      style={{ width: `${(value / 5) * 100}%` }}
    >
      {"★".repeat(5)}
    </span>
    <span className="theory-stars-num">{value.toFixed(1)}</span>
  </span>
);

const TheorySubjects = () => {
  return (
    <>
      <style>{`
        .theory-section {
          padding: 70px 10% 30px;
          color: #ffffff;
          font-family: Poppins, sans-serif;
        }

        /* wrapper carries the layout + the scroll observer (real area, fires reliably);
           inner line draws via variants propagation so zero-width never blocks IO */
        .theory-drawline-wrap {
          max-width: 1100px;
          margin: 30px auto 0;
        }

        /* animated line that draws across when the section scrolls into view */
        .theory-drawline {
          height: 3px;
          width: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #a855f7, #22d3ee, #ffb703, #a855f7);
          background-size: 220% 100%;
          transform-origin: left center;
          box-shadow: 0 0 18px rgba(168, 85, 247, 0.55);
          animation: shimmer-line 3.5s linear infinite;
        }

        .theory-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 34px auto 0;
        }

        .theory-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, rgba(23, 32, 56, 0.95), rgba(13, 18, 36, 0.9));
          border-radius: 20px;
          padding: 26px 24px 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 34px rgba(2, 6, 23, 0.55);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        /* gradient accent bar across the top of every card */
        .theory-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 20px 20px 0 0;
          background: linear-gradient(90deg, #a855f7, #22d3ee, #ffb703);
          opacity: 0.9;
        }

        /* soft glow that fades in on hover */
        .theory-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(420px circle at 50% -60px, rgba(168, 85, 247, 0.22), transparent 65%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .theory-card:hover {
          transform: translateY(-10px);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 0 24px 54px rgba(124, 58, 237, 0.32);
        }

        .theory-card:hover::after {
          opacity: 1;
        }

        .theory-index {
          position: absolute;
          top: 10px;
          right: 16px;
          font-size: 46px;
          font-weight: 800;
          line-height: 1;
          color: rgba(255, 255, 255, 0.05);
          pointer-events: none;
          user-select: none;
        }

        .theory-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 6px;
        }

        .theory-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 0.5px;
          color: #fff;
          background: linear-gradient(135deg, #7c3aed, #a855f7 55%, #d946ef);
          box-shadow: 0 10px 24px rgba(168, 85, 247, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.28);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .theory-card:hover .theory-icon {
          transform: scale(1.08) rotate(-5deg);
        }

        .theory-card h2 {
          font-size: 20px;
          line-height: 1.3;
          margin: 0 0 7px;
          color: #ffffff;
          font-weight: 700;
        }

        .theory-stars {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }

        .theory-stars-bg {
          color: rgba(255, 255, 255, 0.16);
          font-size: 15px;
          letter-spacing: 3px;
          line-height: 1;
        }

        .theory-stars-fg {
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;
          white-space: nowrap;
          color: #ffb703;
          font-size: 15px;
          letter-spacing: 3px;
          line-height: 1;
          text-shadow: 0 0 12px rgba(255, 183, 3, 0.65);
          pointer-events: none;
        }

        .theory-stars-num {
          font-size: 12.5px;
          font-weight: 800;
          color: #ffcf5c;
          letter-spacing: 0.3px;
        }

        .theory-meter-row {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 20px 0 15px;
        }

        .theory-meter {
          flex: 1;
          height: 8px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
        }

        .theory-meter-fill {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #a855f7, #e879f9, #ffb703, #a855f7);
          background-size: 220% 100%;
          animation: shimmer-line 3.2s linear infinite;
          box-shadow: 0 0 14px rgba(168, 85, 247, 0.6);
        }

        .theory-pct {
          font-size: 13px;
          font-weight: 800;
          color: #e9d5ff;
          min-width: 44px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }

        .theory-card p {
          position: relative;
          z-index: 1;
          margin: 0;
          font-size: 14.5px;
          line-height: 1.75;
          color: #cfc9e3;
        }

        @media (max-width: 768px) {
          .theory-section {
            padding: 56px 16px 20px;
          }

          .theory-drawline-wrap {
            margin: 24px 8px 0;
          }

          .theory-container {
            grid-template-columns: 1fr;
            max-width: 440px;
          }
        }
      `}</style>

      <section className="theory-section">
        <SectionHeading
          kicker="Foundations"
          title="CS fundamentals I <g>actually use</g>"
          subtitle="The theory that shows up in my code reviews, schema designs, and 2 AM debugging sessions."
        />

        {/* draw-line: observer lives on the wrapper (full area -> fires on every
            viewport); the zero-width line itself animates via variant propagation */}
        <motion.div
          className="theory-drawline-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="theory-drawline"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        </motion.div>

        <div className="theory-container">
          {subjects.map((subject, i) => (
            <motion.div
              className="theory-card"
              key={subject.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, y: 44 },
                visible: (idx) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.65,
                    delay: (idx % 3) * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }),
              }}
            >
              <span className="theory-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="theory-card-top">
                <div className="theory-icon">{subject.code}</div>
                <div>
                  <h2>{subject.title}</h2>
                  <Stars value={subject.rating} />
                </div>
              </div>
              <div className="theory-meter-row">
                <div className="theory-meter">
                  <motion.span
                    className="theory-meter-fill"
                    custom={subject.level}
                    variants={{
                      hidden: { width: "0%" },
                      visible: (level) => ({
                        width: level,
                        transition: {
                          duration: 1.2,
                          delay: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }),
                    }}
                  />
                </div>
                <span className="theory-pct">{subject.level}</span>
              </div>
              <p>{subject.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TheorySubjects;
