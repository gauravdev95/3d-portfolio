import html2pdf from "html2pdf.js";


// PdfDownload component to download the resume as a PDF
const PdfDownload = () => {
  const downloadPDF = () => {
    const element = document.getElementById("resume");
    if (!element) return;

    const heightPx = element.scrollHeight;
    const heightMm = heightPx * 0.264583; // px → mm

    const opt = {
      filename: "Resume.pdf",
      margin: 0,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: {
        unit: "mm",
        format: [210, heightMm + 5],   // ⬅️ AUTO HEIGHT
        orientation: "portrait",
      },
      pagebreak: { mode: ["avoid-all"] },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
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
