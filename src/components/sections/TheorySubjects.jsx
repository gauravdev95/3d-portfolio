import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const subjects = [
  {
    title: "DBMS",
    rating: "4.5 / 5",
    level: "90%",
    text: "Database design, normalization, transactions, indexing, SQL — the stuff behind every schema I've drawn and every slow query I've fixed.",
  },
  {
    title: "Operating Systems",
    rating: "4 / 5",
    level: "80%",
    text: "Processes, threads, scheduling, deadlocks, memory management. Shows up whenever I debug why a backend is acting weird.",
  },
  {
    title: "OOPs",
    rating: "4.5 / 5",
    level: "90%",
    text: "Encapsulation, inheritance, polymorphism, abstraction — and more importantly, knowing when not to over-engineer with them.",
  },
  {
    title: "Computer Networks",
    rating: "4 / 5",
    level: "80%",
    text: "OSI/TCP-IP, HTTP/HTTPS, DNS, client-server communication. Basically the reason my APIs work over the internet at all.",
  },
  {
    title: "System Design",
    rating: "4 / 5",
    level: "80%",
    text: "REST APIs, databases, caching, load balancing basics, real-time event flows. I think in systems now, not just endpoints.",
  },
];

const TheorySubjects = () => {
  return (
    <>
      <style>{`
        .theory-section {
          padding: 70px 10% 30px;
          color: #ffffff;
          font-family: Poppins, sans-serif;
        }

        .theory-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .theory-card {
          background: rgba(17, 25, 40, 0.83);
          border-radius: 18px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .theory-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 183, 3, 0.4);
          box-shadow: rgba(255, 183, 3, 0.16) 0 16px 40px;
        }

        .theory-card-header {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
          margin-bottom: 16px;
        }

        .theory-card h2 {
          font-size: 21px;
          line-height: 1.35;
          margin: 0;
          color: #ffffff;
        }

        .theory-rating {
          color: #ffb703;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }

        .theory-meter {
          height: 8px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          margin-bottom: 16px;
        }

        .theory-meter-fill {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #a855f7, #ffb703);
          box-shadow: 0 0 12px rgba(168, 85, 247, 0.55);
        }

        .theory-card p {
          margin: 0;
          font-size: 14.5px;
          line-height: 1.7;
          color: #d7d3e6;
        }

        @media (max-width: 768px) {
          .theory-section {
            padding: 56px 16px 20px;
          }
        }
      `}</style>

      <section className="theory-section">
        <SectionHeading
          kicker="Foundations"
          title="CS fundamentals I <g>actually use</g>"
          subtitle="The theory that shows up in my code reviews, schema designs, and 2 AM debugging sessions."
        />

        <div className="theory-container">
          {subjects.map((subject, i) => (
            <motion.div
              className="theory-card"
              key={subject.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="theory-card-header">
                <h2>{subject.title}</h2>
                <span className="theory-rating">{subject.rating}</span>
              </div>
              <div className="theory-meter">
                <motion.span
                  className="theory-meter-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: subject.level }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
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
