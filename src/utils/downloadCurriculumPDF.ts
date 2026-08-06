export const downloadCurriculumPDF = async () => {
  try {
    const response = await fetch('/cv_robert_ciobanu.pdf');
    if (!response.ok) throw new Error('File non trovato');
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CV_Robert_Ciobanu.pdf');
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Errore durante il download del PDF:', error);
  }
};