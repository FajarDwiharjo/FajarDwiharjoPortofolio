import React, { useState } from "react";
import arrowWhite from "../../assets/arrow_white.svg"
import arrowBlack from "../../assets/arrow_black.svg"

interface ServiceLinkCardProps {
    title: string;
    subtitle: string;
    href: string;
}
  
const ServiceLinkCard: React.FC<ServiceLinkCardProps> = ({ title, subtitle, href }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
            <div className="flex items-center justify-between">
                <div className="p-6 rounded-lg bg-transparent hover:bg-black/70 transition duration-300 shadow-md">
            <h3 className="text-2xl font-semibold text-[#39FF14]">{title}</h3>
            <p className="text-[#b3ffcc] mt-2">{subtitle}</p>
            </div>
            
            <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[85.25px] h-[85.25px] gap-[10px] opacity-80 border border-[#39FF14] rounded-[180px] p-[20px] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition my-5 ml-5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <img
                src={isHovered ? arrowWhite : arrowBlack}
                className={`transition-transform duration-300 ${isHovered ? "rotate-45" : "rotate-0"}`}
            />
            </a>
        </div>
    );
};

export default ServiceLinkCard;