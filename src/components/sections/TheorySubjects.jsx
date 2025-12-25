const TheorySubjects = () => {
  return (
    <>
      <section className="theory-section">
        <h1 className="theory-title">Core Theory Subjects</h1>

        <div className="theory-container">
          {/* DBMS */}
          <div className="theory-card">
            <h2>DBMS</h2>
            <div className="rating">
              ★ ★ ★ ★ <span className="empty">★</span>
              <span className="rating-text">4 / 5</span>
            </div>
            <p>
              Strong understanding of <b>Database Design</b>, <b>Normalization</b>,
              <b> Transactions</b>, <b>Indexing</b>, and <b>SQL</b>.
            </p>
          </div>

          {/* OS */}
          <div className="theory-card">
            <h2>Operating Systems</h2>
            <div className="rating">
              ★ ★ ★ ★ <span className="empty">★</span>
              <span className="rating-text">4 / 5</span>
            </div>
            <p>
              Knowledge of <b>Processes</b>, <b>Threads</b>, <b>CPU Scheduling</b>,
              <b> Deadlocks</b>, and <b>Memory Management</b>.
            </p>
          </div>

          {/* OOPs */}
          <div className="theory-card highlight-card">
            <h2>OOPs</h2>
            <div className="rating">
              ★ ★ ★ ★ ★
              <span className="rating-text">5 / 5</span>
            </div>
            <p>
              Strong grasp of <b>OOP Principles</b> like Encapsulation,
              Inheritance, Polymorphism, and Abstraction with real coding usage.
            </p>
          </div>

          {/* CN */}
          <div className="theory-card">
            <h2>Computer Networks</h2>
            <div className="rating">
              ★ ★ ★ ★ <span className="empty">★</span>
              <span className="rating-text">4 / 5</span>
            </div>
            <p>
              Understanding of <b>OSI & TCP/IP models</b>, <b>HTTP/HTTPS</b>,
              <b> DNS</b>, and <b>Network Security basics</b>.
            </p>
          </div>

          {/* System Design */}
          <div className="theory-card system-card">
            <h2>System Design</h2>
            <div className="rating">
              ★ ★ ★  <span className="empty">★ ★</span>
              <span className="rating-text">3 / 5</span>
            </div>
            <p>
              Experience in designing <b>scalable systems</b>, understanding
              <b> client-server architecture</b>, <b>REST APIs</b>,
              <b> Databases</b>, <b>Caching</b>, and <b>Basic Load Balancing</b>.
            </p>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .theory-section {
          min-height: 100vh;
          padding: 80px 10%;
          background: linear-gradient(135deg, #0b0014, #1a062d, #2a0a45);
          color: #ffffff;
          font-family: Poppins, sans-serif;
        }

        .theory-title {
          text-align: center;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 60px;
        }

        .theory-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .theory-card {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          transition: all 0.35s ease;
        }

        .theory-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 15px 40px rgba(160, 90, 255, 0.4);
        }

        .theory-card h2 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #c89bff;
        }

        .rating {
          font-size: 20px;
          color: #ffb703;
          margin-bottom: 14px;
        }

        .empty {
          color: rgba(255, 255, 255, 0.25);
        }

        .rating-text {
          font-size: 14px;
          margin-left: 10px;
          color: #c89bff;
          font-weight: 600;
        }

        p {
          font-size: 15px;
          line-height: 1.7;
          color: #e6e6e6;
        }

        b {
          color: #ffb703;
          font-weight: 600;
        }

        .highlight-card {
          border: 1px solid rgba(255, 183, 3, 0.45);
        }

        /* Special feel for System Design */
        .system-card {
          border: 1px solid rgba(168, 85, 247, 0.5);
        }

        @media (max-width: 768px) {
          .theory-title {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
};

export default TheorySubjects;
