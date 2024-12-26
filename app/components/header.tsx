import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap gap-8 items-left">
        <ul className="flex space-x-4 ml-auto">  {}
          <li className="font-bold text-xl p-2 rounded bg-[#FFC5C5] hover:bg-yellow-300 hover:text-black">
            <Link href="#home">Home</Link>
          </li>
          <li className="font-bold text-xl p-2 rounded bg-[#faf2b9] hover:bg-yellow-300 hover:text-black">
            <Link href="#education">Education & Skills</Link>
          </li>
          <li className="font-bold text-xl p-2 rounded bg-[#bddca7] hover:bg-yellow-300 hover:text-black">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="font-bold text-xl p-2 rounded bg-[#a7dccd] hover:bg-yellow-300 hover:text-black">
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
