import Link from 'next/link';
// color palette: #fbceb1, #b1ddc9, #6cd0d0, #ffcbdb
const Navbar = () => {
  return (
    <nav w-full>
      <div className="flex flex-wrap gap-8 pt-0 pb-0 items-left">
        <ul className="flex space-x-4 ml-auto">  { }
          <li className="text-lg p-2 hover:bg-[#fbceb1] hover:text-black">
            <Link href="#home">Home</Link>
          </li>
          <li className="text-lg p-2 hover:bg-[#b1ddc9] hover:text-black">
            <Link href="#education">Education </Link>
          </li>
          <li className="text-lg p-2 hover:bg-[#6cd0d0] hover:text-black">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="text-lg p-2 hover:bg-[#ffcbdb] hover:text-black">
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
