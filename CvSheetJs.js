"use strict";

function generatePDF() {
      const content = document.getElementById('content');
      html2pdf().from(content).save('ss.pdf');
    }