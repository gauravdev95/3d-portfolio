import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";
import juice from "juice";

const PdfDownload = () => {
  const downloadWord = () => {
    const element = document.getElementById("resume");
    if (!element) return;

    // GET HTML + INLINE ALL CSS AUTOMATICALLY
    const htmlWithInlineCss = juice(element.outerHTML);

    const finalHTML = `
      <html>
        <head><meta charset="UTF-8"></head>
        <body>${htmlWithInlineCss}</body>
      </html>
    `;

    const blob = htmlDocx.asBlob(finalHTML);
    saveAs(blob, "Resume.docx");
  };

  return (
    <button onClick={downloadWord}>Download Resume Word File</button>
  );
};

export default PdfDownload;

