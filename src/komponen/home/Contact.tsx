import Bio from "../contact/bio/bio";

export default function Contact() {
  return (
    <section className="flex flex-col py-20 justify-between bg-black/60 text-white" id="contact">
      <div className="flex flex-row mt-24">
        <Bio />
      </div>
    </section>
  );
}
