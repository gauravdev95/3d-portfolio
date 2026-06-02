const achievements = [
  {
    title: "DSA & Problem Solving",
    label: "800+ solved",
    text: "Solved 800+ Data Structures and Algorithms problems across LeetCode, GeeksforGeeks, and coding practice platforms, building strong foundations in arrays, trees, graphs, dynamic programming, and system-level problem solving.",
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

const Achievement = () => {
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
        }
      `}</style>

      <section className="achievement-section" id="Achievements">
        <h1 className="achievement-title">Achievements</h1>
        <p className="achievement-subtitle">
          Coding milestones, hackathon results, certifications, and applied AI
          engineering work that support my full-stack development journey.
        </p>

        <div className="achievement-container">
          {achievements.map((achievement) => (
            <div className="achievement-card" key={achievement.title}>
              <div className="achievement-card-header">
                <h2>{achievement.title}</h2>
                <span className="achievement-label">{achievement.label}</span>
              </div>
              <p>{achievement.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Achievement;
