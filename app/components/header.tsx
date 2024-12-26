import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap gap-8 items-left">
        <ul className="flex space-x-4 ml-auto">  {}
          <li className="font-bold text-lg p-2 hover:bg-[#FFC5C5] hover:text-black">
            <Link href="#home">Home</Link>
          </li>
          <li className="font-bold text-lg p-2 hover:bg-[#faf2b9] hover:text-black">
            <Link href="#education">Education & Skills</Link>
          </li>
          <li className="font-bold text-lg p-2 hover:bg-[#bddca7] hover:text-black">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="font-bold text-lg p-2 hover:bg-[#a7dccd] hover:text-black">
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
