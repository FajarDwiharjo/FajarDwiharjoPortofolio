import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inHomeSection, setInHomeSection] = useState(true);
  const [activeSection, setActiveSection] = useState("#home");

  const navigate = useNavigate();
  const location = useLocation();
  const isRoot = location.pathname === "/";

  const homeRef = useRef<HTMLElement | null>(null);

  const sections = [
    { id: "#about", label: "About" },
    { id: "#work", label: "Work" },
    { id: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = async (sectionId: string) => {
    toggleMenu();

    if (sectionId.startsWith("#")) {
      setActiveSection(sectionId);

      if (!isRoot) {
        navigate("/");
        setTimeout(() => {
          const section = document.querySelector(sectionId);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const section = document.querySelector(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(sectionId);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInHomeSection(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.8,
      }
    );

    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeRef.current = homeElement;
      observer.observe(homeElement);
    }

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  return (
    <>
      {inHomeSection && (
        <nav
          className={`fixed top-0 left-0 w-full z-50 px-20 py-6 flex justify-between items-center transition-all duration-500 ease-in-out ${
            isRoot ? "bg-transparent" : "bg-black shadow-md"
          }`}
        >
          <button
            onClick={() => handleClick("#home")}
            className="font-semibold text-[#39FF14] text-xl"
          >
            @navrosjo
          </button>

          <ul className="flex gap-10 text-[#39FF14] text-xl">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className="hover:text-green-300 transition duration-300"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {!inHomeSection && (
        <>
          <button
            className="fixed top-[60px] right-[60px] z-50 p-5 bg-[#39FF14] shadow-lg rounded-full text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div
            className={`fixed top-0 right-0 min-h-full w-2/6 bg-black shadow-lg z-70 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button onClick={toggleMenu} aria-label="Close menu">
              <X
                size={40}
                className="fixed top-[72px] right-[72px] z-40 p-2 bg-[#39FF14] text-black shadow-lg rounded-full"
              />
            </button>
            <div className="flex flex-col h-full my-10 ml-20 justify-between">
              <ul className="flex flex-col gap-6 text-[#39FF14] text-6xl mt-24 list-none">
                {sections.map(({ id, label }) => (
                  <li key={id} className="flex flex-row gap-5 items-center">
                    {activeSection === id && (
                      <span className="text-4xl text-[#39FF14]">•</span>
                    )}
                    <button
                      onClick={() => handleClick(id)}
                      className="hover:text-green-300 text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="absolute bottom-5 flex flex-row gap-6 text-[#39FF14] text-xl">
                {/* Add social links here */}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
