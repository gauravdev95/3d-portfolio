import html2pdf from "html2pdf.js";

const PdfDownload = () => {
  const downloadPDF = () => {
    const element = document.getElementById("resume");

    if (!element) {
      alert("Resume section not found");
      return;
    }

    html2pdf()
      .from(element)
      .set({
        filename: "Gaurav_Yadav_Resume.pdf",
        margin: 0.5,
        html2canvas: { scale: 2 },
        jsPDF: { format: "a4", orientation: "portrait" },
      })
      .save();
  };

  return (
    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <button
        onClick={downloadPDF}
        style={{
          padding: "10px 20px",
          background: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Download Resume PDF
      </button>
    </div>
  );
};

export default PdfDownload;
