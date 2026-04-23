import ModernPDF from "@/components/pdf/ModernPDF";
import CorporatePDF from "@/components/pdf/CorporatePDF";
import CreativePDF from "@/components/pdf/CreativePDF";

export const getPdfTemplate = (template, data) => {
  const map = {
    modern: ModernPDF,
    corporate: CorporatePDF,
    creative: CreativePDF,
  };

  const Template = map[template] || ModernPDF;

  // data contient ici { ...form, colors } envoyé par GeneratorCV
  // On passe 'form' (les textes) ET 'colors' (le thème) séparément
  return <Template form={data} colors={data.colors} />;
};