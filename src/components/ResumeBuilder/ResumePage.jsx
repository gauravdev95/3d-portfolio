import resumeData from "./resumeData";





const ResumePage = ({ resumeData }) => {
  const r = resumeData;

  return (
    <>
      {/* ===== ONE-PAGE CSS ===== */}
      <style>{`
        /* A4 PAGE LOCK */
        #resume {
          width: 210mm;
          min-height: 297mm;
          padding: 18mm;
          margin: auto;
          background: #fff;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12.5px;
          line-height: 1.35;
          color: #000;
        }

        /* HEADER */
        .resume-name {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .resume-header {
          text-align: center;
          font-size: 12px;
          margin-top: 4px;
        }

        .resume-header a {
          color: #0000ee;
          text-decoration: underline;
          font-weight: 600;
        }

        .resume-location {
          text-align: center;
          font-size: 11.5px;
          color: #444;
          margin-bottom: 8px;
        }

        /* SECTION TITLE */
        .section-title {
          margin-top: 12px;
          font-size: 13px;
          font-weight: 700;
          color: #4a148c;
          text-transform: uppercase;
          border-bottom: 1.2px solid #4a148c;
          padding-bottom: 2px;
          margin-bottom: 6px;
          letter-spacing: 0.3px;
        }

        /* TEXT */
        p {
          margin: 2px 0;
        }

        /* SKILLS */
        .skill-line {
          font-size: 12.5px;
          margin-bottom: 3px;
        }

        /* BLOCKS */
        .block {
          margin-bottom: 8px;
        }

        .block-title {
          font-weight: 700;
          font-size: 12.7px;
        }

        /* LISTS */
        ul {
          margin: 3px 0 0 16px;
          padding: 0;
        }

        li {
          margin-bottom: 3px;
          text-align: justify;
        }

        /* EDUCATION */
        .edu-row {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
        }

        .edu-row span:last-child {
          font-weight: 600;
          white-space: nowrap;
        }

        /* LINKS */
        .github a {
          color: #0d47a1;
          font-weight: 600;
          text-decoration: none;
          margin-left: 4px;
        }

        .github a:hover {
          text-decoration: underline;
        }

        /* PREVENT PAGE BREAK */
        .block,
        .edu-row,
        ul,
        li {
          page-break-inside: avoid;
        }

        @page {
          size: A4;
          margin: 0;
        }
      `}</style>

      {/* ===== RESUME CONTENT ===== */}
      <div id="resume">
        {/* HEADER */}
        <div className="resume-name">{r.name.toUpperCase()}</div>

        <div className="resume-header">
          {r.contact.phone} | {r.contact.email}
          <br />
          <a href={`https://${r.contact.linkedin}`} target="_blank" rel="noreferrer">
            {r.contact.linkedin}
          </a>
          {" | "}
          <a href={`https://${r.contact.github}`} target="_blank" rel="noreferrer">
            {r.contact.github}
          </a>
        </div>

        <div className="resume-location">{r.contact.location}</div>

        {/* OBJECTIVE */}
        <div className="section-title">Career Objective</div>
        <p>{r.objective}</p>

        {/* SKILLS */}
        <div className="section-title">Skills</div>
        {Object.entries(r.skills).map(([k, v]) => (
          <p key={k} className="skill-line">
            <b>{k}</b>: {v.join(", ")}
          </p>
        ))}

        {/* EXPERIENCE */}
        <div className="section-title">Experience</div>
        {r.experience.map((e, i) => (
          <div key={i} className="block">
            <p className="block-title">
              {e.role} — {e.company} | {e.duration}
            </p>
            <ul>
              {e.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* PROJECTS */}
        <div className="section-title">Projects</div>
        {r.projects.map((p, i) => (
          <div key={i} className="block">
            <p className="block-title">
              {i + 1}. {p.title} | {p.tech} — {p.duration}
              <span className="github">
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            </p>
            <ul>
              {p.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* EDUCATION */}
        <div className="section-title">Education</div>
        {r.education.map((e, i) => (
          <div key={i} className="edu-row">
            <span>
              <b>{e.degree}</b>
              <br />
              {e.institute}
            </span>
            <span>
              {e.duration} | {e.score}
            </span>
          </div>
        ))}

        {/* ACHIEVEMENTS */}
        <div className="section-title">Achievements</div>
        <ul>
          {r.achievements.map((a, i) => (
            <li key={i}>
              <b>{a.title}:</b> {a.desc}
            </li>
          ))}
        </ul>

        {/* CERTIFICATIONS */}
        <div className="section-title">Certifications</div>
        <ul>
          {r.certifications.map((c, i) => (
            <li key={i}>
              <b>{c.title}:</b> {c.desc}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResumePage;
