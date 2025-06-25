import ImageCarousel from "../Carousel/Carousel";
import ServiceLinkCard from "../Card/Card";

import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";
import project5 from "../../assets/images/project5.jpg";
import project6 from "../../assets/images/project6.jpg";
import project7 from "../../assets/images/project7.jpg";
import project8 from "../../assets/images/project8.jpg";

// import testimoni1 from "../../assets/images/testimoni.png";
// import testimoni2 from "../../assets/images/testimonii.png";

export default function Work() {
  const firstRowProjects = [
    { image: project1, link: "https://placeholder.com" },
    { image: project2, link: "https://placeholder.com" },
    { image: project3, link: "https://placeholder.com" },
    { image: project4, link: "https://placeholder.com" },
  ];

  const secondRowProjects = [
    { image: project5, link: "https://placeholder.com" },
    { image: project6, link: "https://placeholder.com" },
    { image: project7, link: "https://placeholder.com" },
    { image: project8, link: "https://placeholder.com" },
  ];

  const workItems = [
    {
      title: "Electrical Tech Support",
      subtitle: "have been worked on few Electrical Panels and Genset",
    },
    {
      title: "Quality Control",
      subtitle: "Working on Quality Control environment of many project",
    },
    {
      title: "PCB Manufacture",
      subtitle: "Manual Drafting and Chemical Etching of PCBs",
    },
    {
      title: "Assembly",
      subtitle: "Mounting and Soldering Electronic Components on a PCB",
    },
  ];

  // const testimonials = [
  //   {
  //     name: "Ayush Raj",
  //     image: testimoni1,
  //     designation: "VP of Marketing @ Webflow",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     name: "Alex Cattoni",
  //     image: testimoni2,
  //     designation: "Founder @ CopyPossy",
  //     description:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   },
  // ];

  return (
    <section className="h-full mx-[80px] py-20 text-[#b3ffcc]" id="work">
      {/* Work Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
          <h2 className="text-3xl font-semibold text-[#39FF14]">Recent Work</h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-8">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-black/70 backdrop-blur-md border border-[#39FF14]/30 shadow-[0_0_20px_#39FF14]/20"
            >
              <ServiceLinkCard
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container flex flex-col items-center min-w-full mt-40">
        <ImageCarousel
          items={firstRowProjects}
          autoPlayreverse={false}
          speed={20}
        />
        <ImageCarousel
          items={secondRowProjects}
          autoPlayreverse={true}
          speed={20}
        />
      </div>

      {/* Testimonials Section */}
      {/* <div className="container mx-auto flex flex-col md:flex-row justify-between mt-40">
        <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
          <h2 className="text-3xl font-semibold text-[#39FF14]">Testimonials</h2>
        </div>

        <div className="w-2/3 flex flex-col gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-black/70 backdrop-blur-md border border-[#39FF14]/30 shadow-[0_0_20px_#39FF14]/20"
            >
              <p className="text-xl leading-[160%] text-white">{item.description}</p>
              <div className="flex gap-4 mt-6 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-2 border-[#39FF14]/50"
                />
                <div>
                  <div className="font-bold text-lg text-[#39FF14]">{item.name}</div>
                  <p className="text-sm text-gray-300">{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
