import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

interface NavbarProps {
  showCopyMessage: (copied: string) => void;
  onHover: (isHovering: boolean) => void;
}

export default function Navbar({ showCopyMessage, onHover }: NavbarProps) {
  function CopyEmail() {
    navigator.clipboard.writeText("danielgwilcox@gmail.com");
    showCopyMessage("danielgwilcox@gmail.com");
  }

  return (
    <nav className="text-white p-4 fixed top-0 w-full border-2 border-white z-10">
      <ul className="flex justify-end ml-auto space-x-8">
        <li>
          <a
            href="#"
            className="hover:text-gray-300 cursor-none"
            onClick={CopyEmail}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <AiOutlineMail size={30}></AiOutlineMail>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-wilcox-24902"
            className="hover:text-gray-300 cursor-none"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <AiOutlineLinkedin size={30}></AiOutlineLinkedin>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DWilcox02"
            className="hover:text-gray-300 cursor-none"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <AiOutlineGithub size={30}></AiOutlineGithub>
          </a>
        </li>
      </ul>
    </nav>
  );
}
