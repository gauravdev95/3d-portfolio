const subjects = [
  {
    title: "DBMS",
    rating: "4.5 / 5",
    level: "90%",
    text: "Strong understanding of database design, normalization, transactions, indexing, SQL, and schema planning for application backends.",
  },
  {
    title: "Operating Systems",
    rating: "4 / 5",
    level: "80%",
    text: "Knowledge of processes, threads, CPU scheduling, deadlocks, memory management, and core OS concepts used in backend engineering.",
  },
  {
    title: "OOPs",
    rating: "4.5 / 5",
    level: "90%",
    text: "Strong grasp of encapsulation, inheritance, polymorphism, abstraction, and clean object-oriented design in practical coding.",
  },
  {
    title: "Computer Networks",
    rating: "4 / 5",
    level: "80%",
    text: "Understanding of OSI and TCP/IP models, HTTP/HTTPS, DNS, client-server communication, and network security basics.",
  },
  {
    title: "System Design",
    rating: "4 / 5",
    level: "80%",
    text: "Experience designing scalable systems with REST APIs, databases, caching, load balancing basics, and real-time event flows.",
  },
];

const TheorySubjects = () => {
  return (
    <>
      <style>{`
        .theory-section {
          padding: 80px 10%;
          color: #ffffff;
          font-family: Poppins, sans-serif;
        }

        .theory-title {
          text-align: center;
          font-size: 52px;
          font-weight: 600;
          margin: 0 0 16px;
        }

        .theory-subtitle {
          max-width: 720px;
          margin: 0 auto 44px;
          text-align: center;
          color: #c9c3dc;
          font-size: 18px;
          line-height: 1.7;
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
          border-radius: 8px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .theory-card:hover {
          transform: translateY(-6px);
          box-shadow: rgba(168, 85, 247, 0.28) 0 14px 34px;
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
          background: rgba(255, 255, 255, 0.14);
          margin-bottom: 16px;
        }

        .theory-meter span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #a855f7, #ffb703);
        }

        .theory-card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: #d7d3e6;
        }

        @media (max-width: 768px) {
          .theory-section {
            padding: 64px 16px;
          }

          .theory-title {
            font-size: 32px;
          }

          .theory-subtitle {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="theory-section">
        <h1 className="theory-title">Core Theory Subjects</h1>
        <p className="theory-subtitle">
          Computer science foundations I use while building APIs, databases,
          AI systems, and scalable full-stack products.
        </p>

        <div className="theory-container">
          {subjects.map((subject) => (
            <div className="theory-card" key={subject.title}>
              <div className="theory-card-header">
                <h2>{subject.title}</h2>
                <span className="theory-rating">{subject.rating}</span>
              </div>
              <div className="theory-meter">
                <span style={{ width: subject.level }} />
              </div>
              <p>{subject.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TheorySubjects;
