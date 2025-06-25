import profileImage from "../../assets/Person.png";
import NavBar from "../navbar/navbar";

export default function Hero() {
  return (
    <section
      id="home"
      className=" text-gray-100 h-screen w-screen overflow-hidden"
    >
      <NavBar />
      <div className="relative h-full w-full text-center">
        {/* Title */}
        <div className="absolute inset-0 flex justify-center items-end">
          <h2 className="text-cyan-400 drop-shadow-[0_0_10px_#00bfff] text-[8vw] md:text-[5vw] font-semibold mb-48 opacity-80 z-10 select-none leading-none whitespace-nowrap animate-move-right-to-left">
            Electrical Tech support - QC - Drafter - Assembly
          </h2>
        </div>

        {/* Profile Image */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-0">
          <img
            src={profileImage}
            alt="Profile"
            className="h-[clamp(700px,60vh,800px)] w-auto object-contain drop-shadow-[0_0_30px_#00bfff]"
          />
        </div>

        {/* CTA Button */}
        <div className="absolute right-4 md:right-8 bottom-[20%] md:bottom-[25%] z-20">
          <button className="group relative bg-gray-900/80 text-lime-400 px-6 md:px-8 py-2 md:py-3 rounded-full text-2xl md:text-4xl flex items-center gap-3 md:gap-4 transition-all duration-500 transform translate-x-[50%] md:translate-x-[75%] hover:translate-x-5 hover:text-pink-400 hover:drop-shadow-[0_0_10px_#ff00aa]">
            👋 <span className="whitespace-nowrap">Hey I'm Fajar D.</span>
          </button>
        </div>
      </div>
    </section>
  );
}
