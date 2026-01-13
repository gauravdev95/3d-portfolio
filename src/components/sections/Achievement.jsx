const Achievement = () => {
  // Achievement component to display achievements section
  return (
    <>
      {/* CSS inside same file */}
      <style>{`
        .achievement-section {
          min-height: 100vh;
          padding: 80px 10%;
          background: linear-gradient(135deg, #0b0014, #1a062d, #2a0a45);
          color: #ffffff;
          font-family: Poppins, sans-serif;
        }

        .achievement-title {
          text-align: center;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 60px;
        }

        .achievement-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          transition: all 0.35s ease;
          position: relative;
        }

        .achievement-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 15px 40px rgba(160, 90, 255, 0.4);
        }

        .achievement-card h2 {
          font-size: 22px;
          margin-bottom: 18px;
          color: #c89bff;
        }

        /* Tracker */
        .tracker-header {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .tracker-count {
          color: #ffb703;
          font-weight: 700;
        }

        .tracker-bar {
          width: 100%;
          height: 10px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 14px;
        }

        .tracker-fill {
          width: 85%;
          height: 100%;
          background: linear-gradient(90deg, #a855f7, #ffb703);
          border-radius: 10px;
          animation: fill 1.5s ease;
        }

        @keyframes fill {
          from {
            width: 0;
          }
          to {
            width: 85%;
          }
        }

        .tracker-text {
          font-size: 15px;
          line-height: 1.6;
        }

        /* Hackathon highlight */
        .highlight-card {
          border: 1px solid rgba(255, 183, 3, 0.4);
        }

        .badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #ffb703, #ff8c00);
          color: #000;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 20px;
        }

        /* Rank */
        .rank-box {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 12px;
        }

        .rank {
          font-size: 48px;
          font-weight: 800;
          color: #ffb703;
        }

        .rank-text {
          font-size: 16px;
          color: #c89bff;
        }

        p {
          font-size: 15px;
          line-height: 1.7;
          color: #e6e6e6;
        }

        span {
          color: #ffb703;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .achievement-title {
            font-size: 32px;
          }
        }
      `}</style>

      {/* Achievement Section */}
      <section className="achievement-section">
        <h1 className="achievement-title">Achievements</h1>

        <div className="achievement-container">
          {/* DSA Tracker */}
          <div className="achievement-card">
            <h2>DSA & Problem Solving</h2>

            <div className="tracker">
              <div className="tracker-header">
                <span>Problems Solved</span>
                <span className="tracker-count">700+</span>
              </div>

              <div className="tracker-bar">
                <div className="tracker-fill"></div>
              </div>

              <p className="tracker-text">
                Solved <b>700+</b> Data Structures & Algorithms problems on
                <b> LeetCode</b> and <b>GeeksforGeeks</b>.
              </p>
            </div>
          </div>

          {/* Hackathon */}
          <div className="achievement-card highlight-card">
            <h2>Hackathons</h2>

            <div className="badge">🏆 Hackathon</div>

            <p>
              Participated in <b>Smart India Hackathon</b> and built a
              <span> Hiring Manager Platform</span> focusing on real-world
              recruitment automation.
            </p>
          </div>

          {/* Rank */}
          <div className="achievement-card">
            <h2>Competitive Programming</h2>

            <div className="rank-box">
              <span className="rank">6</span>
              <span className="rank-text">th Rank</span>
            </div>

            <p>
              Secured <b>6th Rank</b> out of <b>1000+</b> students in
              <b> Byte Club DSA Test</b>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievement;
