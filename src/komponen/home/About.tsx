export default function About() {
  return (
    <section className="my-[170px] px-6">
      <div className="bg-black/50  backdrop-blur-md border border-[#39FF14]/40 rounded-xl p-10 shadow-[0_0_15px_#39FF14] max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold text-[#39FF14]">About Me</h1>
          </div>

          <div className="mt-6 mb-8">
            <p className="text-xl text-[#ccffe6] drop-shadow-[0_0_60px_black]">
              I have a diverse background in the electronics and electrical industry,  
              working across several disciplines to deliver high-quality technical support and solutions.  
              My experience includes handling electrical panels and genset systems,  
              ensuring their safe and efficient operation,  
              as well as performing quality control on a variety of projects to meet strict standards.  
              I have practiced manual drafting and chemical etching techniques for printed circuit board (PCB) manufacturing,  
              and I am skilled in assembling and soldering electronic components on PCBs.  
              This combination of hands-on assembly skills and thorough quality assurance  
              allows me to contribute effectively to both the development and the reliability of complex electrical systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
