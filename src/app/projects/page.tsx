import PageHead from "@/components/PageHead";
import Projects from "@/components/Projects";
export default function Page() {
  return (<><PageHead eyebrow="Projects" title="Things I've built" sub="Generative AI, machine learning and automation projects." />
    <section className="sec"><Projects /></section></>);
}
