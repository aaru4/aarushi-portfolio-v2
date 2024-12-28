import Link from 'next/link';

const Navbar = () => {
  return (
    <nav w-full>
      <div className="flex flex-wrap gap-8 pt-0 pb-0 items-left">
        <ul className="flex space-x-4 ml-auto">  { }
          <li className="text-lg p-2 hover:bg-[#a8e6ce] hover:text-black">
            <Link href="#home">Home</Link>
          </li>
          <li className="text-lg p-2 hover:bg-[#b3e5fc] hover:text-black">
            <Link href="#education">Education </Link>
          </li>
          <li className="text-lg p-2 hover:bg-[#ffabab] hover:text-black">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="text-lg p-2 hover:bg-[#ff677d] hover:text-black">
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
