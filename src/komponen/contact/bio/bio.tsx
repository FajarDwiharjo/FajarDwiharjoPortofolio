import { Link } from "react-router-dom";
import ContactProfile from "../../../assets/images/contactProfile.png";

function Bio() {
  return (
    <section className="w-1/2 ml-20 my-4 flex" id="bio">
      {/* Profile Image (Left Side) */}
      <div className="w-[200px] flex-shrink-0">
        <img src={ContactProfile} alt="myself" className="w-full rounded-lg" />
      </div>

      {/* Contact Details (Right Side) */}
      <div className="ml-10 flex flex-col justify-center gap-6">
        <div>
          <p className="text-sm text-gray-500">Contact Details</p>
          <div className="text-lg">
            <Link
              to={"mailto:contact@navrosjo.com"}
              className="text-[#39FF14] hover:underline"
            >
              navrosjo@gmail.com
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Social</p>
          <ul className="text-lg flex flex-col gap-2">
            <li>
              <Link
                to={"https://www.linkedin.com/in/fajar-dwiharjo-631736355/"}
                className="text-[#39FF14] hover:underline"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                to={"https://github.com/FajarDwiharjo"}
                className="text-[#39FF14] hover:underline"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                to={"https://discord.com/users/612305582132690964"}
                className="text-[#39FF14] hover:underline"
              >
                Discord
              </Link>
            </li>
            <li>
              <Link
                to={"https://wa.me/62859106962144"}
                className="text-[#39FF14] hover:underline"
              >
                Whatsapp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Bio;
