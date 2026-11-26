import { Download, ExternalLink } from "lucide-react";
import PageHead from "@/components/PageHead";
export default function CV() {
  return (<><PageHead eyebrow="Curriculum Vitae" title="My CV" sub="Read it right here, or download a copy." />
    <section className="sec">
      <div className="mb-6 flex flex-wrap gap-3">
        <a href="/resume.pdf" download className="btn bg-gradient-to-r from-accent to-gold text-bg"><Download size={16}/>Download PDF</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn border border-white/15 hover:border-accent"><ExternalLink size={16}/>Open in new tab</a></div>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-panel">
        <object data="/resume.pdf#view=FitH" type="application/pdf" className="h-[75vh] min-h-[480px] w-full">
          <p className="p-6 text-sm text-mute">Your browser can&apos;t preview PDFs here. Use the buttons above to open or download the CV.</p></object></div></section></>);
}
