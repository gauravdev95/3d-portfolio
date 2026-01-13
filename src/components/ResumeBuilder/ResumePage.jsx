import PdfDownload from "./PdfDownload";

const ResumePage = ({ resumeData }) => {
  if (!resumeData) return null;
  const r = resumeData;

  return (
    <>
      <PdfDownload />

      <style>{`
       #resume {
          width: 210mm;
          height: auto;             
          margin: auto;
          padding: 18mm;
          font-family: "Times New Roman", Times, serif;
          font-size: 12px;
          line-height: 1.32;
          color: #000;
          background: #fff;
        }

        #resume, 
        #resume * {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }

        .name {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
        }

        .role {
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          margin-top: 2px;
        }

        .contact {
          text-align: center;
          font-size: 11px;
          margin-top: 4px;
        }

        .contact span {
          margin: 0 6px;
          font-weight:500;
        }

        .contact a {
          font-weight: 600;
          color: #1e82a5;
          text-decoration: none;
        }

        hr {
          height: 2px;
          border: none;
          border-top: 1.2px solid #000;
          margin: 6px 0;
          background-color: #000;
        }

        .section-title {
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 6px 0 4px;
          color:#1e82a5;
        }

        p {
          margin: 2px 0;
          text-align: justify;
        }

        .skill-line {
          margin-bottom: 2px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
        }
        .row span{
          color: #0b6c8f;
        }

        .subrow {
          display: flex;
          justify-content: space-between;
          font-style: italic;
          font-size: 11.5px;
          margin-bottom: 2px;
        }

        ul {
          margin: 2px 0 4px 16px;
          padding: 0;
        }

        li {
          margin-bottom: 2px;
        }

        .edu {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        @page {
          margin: 0;
        }
      `}</style>

      <div id="resume">
        
        {/* HEADER */}
        <div className="name">{r.name.toUpperCase()}</div>
        <div className="role">{r.role}</div>

        <div className="contact">
          <span>{r.contact.phone}</span> |
          <span>{r.contact.email}</span> |
          <span>
            <a href={`https://${r.contact.linkedin}`} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </span> |
          <span>
            <a href={`https://${r.contact.github}`} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </span> |
          <span>{r.contact.location}</span>
        </div>

        {/* SUMMARY */}
        <div className="section-title">Professional Summary</div>
        <hr />
        <p>{r.summary}</p>

        {/* SKILLS */}
        <div className="section-title">Technical Skills</div>
        <hr />
        {Object.entries(r.skills).map(([k, v]) => (
          <p key={k} className="skill-line">
            <b>{k}:</b> {v.join(", ")}
          </p>
        ))}

        {/* EXPERIENCE */}
        <div className="section-title">Experience & Training</div>
        <hr />
        {r.experience.map((e, i) => (
          <div key={i}>
            <div className="row">
              <span>{e.role}</span>
              <span>{e.duration}</span>
            </div>
            <div className="row" style={{ fontWeight: 400 }}>
              <span>{e.company}</span>
              <span>{e.location}</span>
            </div>
            <ul>
              {e.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
            <div className="subrow">
              <span>Technologies Used: {e.technologies}</span>
            </div>
          </div>
        ))}

        {/* PROJECTS */}
        <div className="section-title">Projects</div>
        <hr />
        {r.projects.map((p, i) => (
        <div key={i}>
          <div className="row">
            <span>{p.title}</span>
            <span>{p.duration}</span>
          </div>

          {p.github && (
            <div style={{ fontSize: "11px", margin: "2px 0", color: "#1e82a5" }}>
              <a href={p.github} target="_blank" rel="noreferrer" style={{ color: "#1e82a5", fontWeight: 600 }}>
                GitHub Repository
              </a>
            </div>
          )}

          <ul>
            {p.points.map((pt, j) => (
              <li key={j}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}

        {/* EDUCATION */}
        <div className="section-title">Education</div>
        <hr />
        {r.education.map((e, i) => (
          <div key={i} className="edu">
            <span>
              <b>{e.degree}</b> <br /> {e.institute}
            </span>
            <span>{e.duration} | {e.score}</span>
          </div>
        ))}

        {/* ACHIEVEMENTS */}
        <div className="section-title">Achievements</div>
        <hr />
        <ul>
          {r.achievements.map((a, i) => (
            <li key={i}>
              <b>{a.title}:</b> {a.desc}
            </li>
          ))}
        </ul>

        {/* CERTIFICATIONS */}
        <div className="section-title">Certifications</div>
        <hr />
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



