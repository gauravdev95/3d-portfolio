import { useState } from "react";
import ResumePage from "./ResumePage";
import PdfDownload from "./PdfDownload";
import resumeData from "./resumeData";

const ResumeEditor = () => {
  const [data, setData] = useState(resumeData);

  /* ===== BASIC HELPERS ===== */
  const updateRoot = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const updateContact = (key, value) => {
    setData(prev => ({
      ...prev,
      contact: { ...prev.contact, [key]: value },
    }));
  };

  const updateSkill = (category, valueArray) => {
    setData(prev => ({
      ...prev,
      skills: { ...prev.skills, [category]: valueArray },
    }));
  };

  const updateArrayField = (section, index, field, value) => {
    const updated = [...data[section]];
    updated[index] = { ...updated[index], [field]: value };
    setData(prev => ({ ...prev, [section]: updated }));
  };

  const updateArrayPoint = (section, index, pIndex, value) => {
    const updated = [...data[section]];
    const points = [...updated[index].points];
    points[pIndex] = value;
    updated[index].points = points;
    setData(prev => ({ ...prev, [section]: updated }));
  };

  /* ===== UI ===== */
  return (
    <>
      <style>{`
        .editor-page {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 16px;
          padding: 16px;
          background: #f4f4f4;
        }

        .editor {
          background: #fff;
          padding: 16px;
          border-radius: 6px;
          max-height: 85vh;
          overflow-y: auto;
        }

        .editor h3 {
          margin: 16px 0 6px;
          font-size: 14px;
        }

        .editor input,
        .editor textarea {
          width: 100%;
          font-size: 13px;
          padding: 6px;
          margin-bottom: 6px;
        }

        .editor small {
          color: #666;
        }

        .section-box {
          margin-bottom: 14px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }

        .preview {
          background: #ccc;
          padding: 10px;
          max-height: 85vh;
          overflow: auto;
        }

        .download {
          text-align: center;
          margin: 20px 0;
        }
      `}</style>

      <div className="editor-page">
        {/* LEFT – EDITOR */}
        <div className="editor">

          {/* BASIC INFO */}
          <div className="section-box">
            <h3>Basic Info</h3>
            <input value={data.name} onChange={e => updateRoot("name", e.target.value)} />
            {Object.keys(data.contact).map(key => (
              <input
                key={key}
                placeholder={key}
                value={data.contact[key]}
                onChange={e => updateContact(key, e.target.value)}
              />
            ))}
          </div>

          {/* OBJECTIVE */}
          <div className="section-box">
            <h3>Career Objective</h3>
            <textarea
              rows={4}
              value={data.objective}
              onChange={e => updateRoot("objective", e.target.value)}
            />
          </div>

          {/* SKILLS */}
          <div className="section-box">
            <h3>Skills (comma separated)</h3>
            {Object.keys(data.skills).map(cat => (
              <div key={cat}>
                <b>{cat}</b>
                <input
                  value={data.skills[cat].join(", ")}
                  onChange={e =>
                    updateSkill(
                      cat,
                      e.target.value.split(",").map(s => s.trim())
                    )
                  }
                />
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div className="section-box">
            <h3>Experience</h3>
            {data.experience.map((e, i) => (
              <div key={i}>
                <input value={e.role} onChange={ev => updateArrayField("experience", i, "role", ev.target.value)} />
                <input value={e.company} onChange={ev => updateArrayField("experience", i, "company", ev.target.value)} />
                <input value={e.duration} onChange={ev => updateArrayField("experience", i, "duration", ev.target.value)} />
                {e.points.map((p, j) => (
                  <input
                    key={j}
                    value={p}
                    onChange={ev => updateArrayPoint("experience", i, j, ev.target.value)}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* PROJECTS */}
          <div className="section-box">
            <h3>Projects</h3>
            {data.projects.map((p, i) => (
              <div key={i}>
                <input value={p.title} onChange={e => updateArrayField("projects", i, "title", e.target.value)} />
                <input value={p.tech} onChange={e => updateArrayField("projects", i, "tech", e.target.value)} />
                <input value={p.duration} onChange={e => updateArrayField("projects", i, "duration", e.target.value)} />
                <input value={p.github} onChange={e => updateArrayField("projects", i, "github", e.target.value)} />
                {p.points.map((pt, j) => (
                  <input
                    key={j}
                    value={pt}
                    onChange={e => updateArrayPoint("projects", i, j, e.target.value)}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <div className="section-box">
            <h3>Education</h3>
            {data.education.map((ed, i) => (
              <div key={i}>
                <input value={ed.degree} onChange={e => updateArrayField("education", i, "degree", e.target.value)} />
                <input value={ed.institute} onChange={e => updateArrayField("education", i, "institute", e.target.value)} />
                <input value={ed.duration} onChange={e => updateArrayField("education", i, "duration", e.target.value)} />
                <input value={ed.score} onChange={e => updateArrayField("education", i, "score", e.target.value)} />
              </div>
            ))}
          </div>

          {/* ACHIEVEMENTS */}
          <div className="section-box">
            <h3>Achievements</h3>
            {data.achievements.map((a, i) => (
              <div key={i}>
                <input value={a.title} onChange={e => updateArrayField("achievements", i, "title", e.target.value)} />
                <input value={a.desc} onChange={e => updateArrayField("achievements", i, "desc", e.target.value)} />
              </div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <div className="section-box">
            <h3>Certifications</h3>
            {data.certifications.map((c, i) => (
              <div key={i}>
                <input value={c.title} onChange={e => updateArrayField("certifications", i, "title", e.target.value)} />
                <input value={c.desc} onChange={e => updateArrayField("certifications", i, "desc", e.target.value)} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – LIVE PREVIEW */}
        <div className="preview">
          <ResumePage resumeData={data} />
        </div>
      </div>

      {/* DOWNLOAD */}
      <div className="download">
        <PdfDownload />
      </div>
    </>
  );
};

export default ResumeEditor;
