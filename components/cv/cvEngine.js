import ModernPDF from "@/components/pdf/ModernPDF";
import CorporatePDF from "@/components/pdf/CorporatePDF";
import CreativePDF from "@/components/pdf/CreativePDF";

export const getPdfTemplate = (template, form) => {
  const map = {
    modern: ModernPDF,
    corporate: CorporatePDF,
    creative: CreativePDF,
  };

  const Template = map[template] || ModernPDF;

  return <Template form={form} />;
};