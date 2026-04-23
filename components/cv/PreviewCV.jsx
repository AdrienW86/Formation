import ModernPreview from "@/components/preview/Modern";
import CorporatePreview from "@/components/preview/Corporate";
import CreativePreview from "@/components/preview/Creative";

export default function PreviewCV({ form, template, colors }) { // On reçoit l'objet colors
  const map = {
    modern: ModernPreview,
    corporate: CorporatePreview,
    creative: CreativePreview,
  };

  const Component = map[template] || ModernPreview;

  // On transmet l'objet colors complet au template
  return <Component form={form} colors={colors} />;
}