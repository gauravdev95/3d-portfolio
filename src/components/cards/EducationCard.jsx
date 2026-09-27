import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const getEndYear = (dateStr = "") => {
  const m = dateStr.match(/(\d{4})\s*$/);
  return m ? parseInt(m[1], 10) : null;
};

const EducationCard = ({ education }) => {
  const endYear = getEndYear(education?.date);
  const isCurrent = endYear !== null && endYear >= new Date().getFullYear();

  return (
    <>
      <style>{`
        .edu-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, rgba(23, 32, 56, 0.96), rgba(13, 18, 36, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 34px rgba(2, 6, 23, 0.55);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          font-family: Poppins, sans-serif;
        }

        .edu-card::before {
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

        .edu-card:hover {
          transform: translateY(-6px);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 0 22px 50px rgba(124, 58, 237, 0.3);
        }

        .edu-top {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .edu-logo {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 16px;
          padding: 3px;
          background: linear-gradient(135deg, #7c3aed, #a855f7 55%, #22d3ee);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.35);
        }

        .edu-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 13px;
          display: block;
          background: #0d1224;
        }

        .edu-head {
          flex: 1;
          min-width: 0;
          padding-top: 2px;
        }

        .edu-school {
          margin: 0 0 6px;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.2px;
          color: #ffffff;
        }

        .edu-degree {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.55;
          color: #b9b3d4;
        }

        .edu-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 10px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #6ee7b7;
        }

        .edu-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.9);
          animation: edu-pulse 1.8s ease-in-out infinite;
        }

        @keyframes edu-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.65; }
        }

        .edu-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .edu-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.2px;
          padding: 7px 14px;
          border-radius: 999px;
          line-height: 1;
        }

        .edu-pill-date {
          color: #c4b5fd;
          background: rgba(124, 58, 237, 0.14);
          border: 1px solid rgba(124, 58, 237, 0.35);
        }

        .edu-pill-grade {
          color: #ffd97a;
          background: rgba(255, 183, 3, 0.1);
          border: 1px solid rgba(255, 183, 3, 0.35);
        }

        .edu-divider {
          height: 1px;
          margin: 18px 0 16px;
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.4), rgba(34, 211, 238, 0.25), transparent);
        }

        .edu-desc {
          margin: 0;
          font-size: 14.5px;
          font-weight: 400;
          line-height: 1.75;
          color: #cfc9e3;
        }

        .edu-timeline-date {
          font-family: Poppins, sans-serif !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          color: #a78bfa !important;
          letter-spacing: 0.3px;
        }

        @media only screen and (max-width: 768px) {
          .edu-card {
            padding: 20px 18px;
          }
          .edu-logo {
            width: 50px;
            height: 50px;
            border-radius: 14px;
          }
          .edu-logo img {
            border-radius: 11px;
          }
          .edu-school {
            font-size: 16.5px;
          }
          .edu-degree {
            font-size: 13px;
          }
          .edu-desc {
            font-size: 13.5px;
          }
        }
      `}</style>

      <VerticalTimelineElement
        icon={
          <img
            width="100%"
            height="100%"
            alt={education?.school}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            src={education?.img}
          />
        }
        iconStyle={{
          background: "#141b31",
          boxShadow:
            "0 0 0 3px rgba(168, 85, 247, 0.55), 0 8px 22px rgba(124, 58, 237, 0.4)",
        }}
        contentStyle={{
          background: "transparent",
          boxShadow: "none",
          border: "none",
          padding: 0,
        }}
        contentArrowStyle={{ borderRight: "none" }}
        date={education?.date}
        dateClassName="edu-timeline-date"
      >
        <div className="edu-card">
          <div className="edu-top">
            <div className="edu-logo">
              <img
                src={education?.img}
                alt={education?.school}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="edu-head">
              <h3 className="edu-school">{education?.school}</h3>
              <p className="edu-degree">{education?.degree}</p>
              {isCurrent && (
                <span className="edu-status">
                  <span className="edu-status-dot" />
                  Pursuing
                </span>
              )}
            </div>
          </div>

          <div className="edu-meta">
            <span className="edu-pill edu-pill-date">{education?.date}</span>
            <span className="edu-pill edu-pill-grade">
              Grade&nbsp;·&nbsp;{education?.grade}
            </span>
          </div>

          <div className="edu-divider" />

          <p className="edu-desc">{education?.desc}</p>
        </div>
      </VerticalTimelineElement>
    </>
  );
};

export default EducationCard;
