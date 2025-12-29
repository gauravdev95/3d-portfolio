import { useState } from "react";
import ResumePage from "./ResumePage";
import PdfDownload from "./PdfDownload";
import resumeData from "./resumeData";

const ResumeEditor = () => {
  // local editable state
  const [data, setData] = useState(resumeData);

  // ===== BASIC HANDLERS =====
  const handleChange = (section, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleObjectiveChange = (value) => {
    setData((prev) => ({ ...prev, objective: value }));
  };

  const handleSkillChange = (category, index, value) => {
    const updated = [...data.skills[category]];
    updated[index] = value;

    setData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: updated,
      },
    }));
  };

  const addSkill = (category) => {
    setData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: [...prev.skills[category], ""],
      },
    }));
  };

  const removeSkill = (category, index) => {
    const updated = data.skills[category].filter((_, i) => i !== index);
    setData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: updated,
      },
    }));
  };

  // ====== RENDER ======
  return (
    <>
      <style>{`
        .editor-page {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 16px;
          padding: 16px;
          background: #f5f5f5;
        }

        .editor {
          background: #fff;
          padding: 14px;
          border-radius: 6px;
          overflow-y: auto;
          max-height: 85vh;
        }

        .editor h3 {
          margin-top: 12px;
          font-size: 14px;
        }

        .editor input,
        .editor textarea {
          width: 100%;
          font-size: 13px;
          padding: 6px;
          margin-bottom: 6px;
        }

        .editor button {
          font-size: 12px;
          margin-right: 6px;
        }

        .preview {
          background: #ccc;
          padding: 10px;
          overflow: auto;
          max-height: 85vh;
        }

        .download {
          text-align: center;
          margin: 20px 0;
        }
      `}</style>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="editor-page">
        {/* LEFT SIDE – EDITOR */}
        <div className="editor">
          <h3>Basic Info</h3>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Name"
          />
          <input
            value={data.contact.phone}
            onChange={(e) =>
              handleChange("contact", "phone", e.target.value)
            }
            placeholder="Phone"
          />
          <input
            value={data.contact.email}
            onChange={(e) =>
              handleChange("contact", "email", e.target.value)
            }
            placeholder="Email"
          />

          <h3>Career Objective</h3>
          <textarea
            rows={4}
            value={data.objective}
            onChange={(e) => handleObjectiveChange(e.target.value)}
          />

          <h3>Skills</h3>
          {Object.keys(data.skills).map((category) => (
            <div key={category}>
              <b>{category}</b>
              {data.skills[category].map((skill, i) => (
                <div key={i}>
                  <input
                    value={skill}
                    onChange={(e) =>
                      handleSkillChange(category, i, e.target.value)
                    }
                  />
                  <button onClick={() => removeSkill(category, i)}>
                    ❌
                  </button>
                </div>
              ))}
              <button onClick={() => addSkill(category)}>
                ➕ Add Skill
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE – PREVIEW */}
        <div className="preview">
          {/* IMPORTANT: pass edited data */}
          <ResumePage resumeData={data} />
        </div>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="download">
        <PdfDownload />
      </div>
    </>
  );
};

export default ResumeEditor;
