import ModernPreview from "@/components/preview/Modern";
import CorporatePreview from "@/components/preview/Corporate";
import CreativePreview from "@/components/preview/Creative";

export default function PreviewCV({ form, template }) {
  const map = {
    modern: ModernPreview,
    corporate: CorporatePreview,
    creative: CreativePreview,
  };

  const Component = map[template] || ModernPreview;

  return <Component form={form} />;
}