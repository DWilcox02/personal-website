import {AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold">
          Your Logo
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              <AiOutlineMail></AiOutlineMail>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              <AiOutlineLinkedin></AiOutlineLinkedin>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              <AiOutlineGithub></AiOutlineGithub>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
