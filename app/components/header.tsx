import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap gap-8 items-left">
        <ul className="flex space-x-4">
          <li className="font-bold text-xl p-2 rounded" style={{ backgroundColor: "#a7dccd" }}>
            Aarushi Ammavajjala
          </li>   
        </ul>
        <ul className="flex space-x-4 ml-auto">  {}
          <li className="hover:bg-yellow-300 hover:text-black p-2 rounded">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:bg-yellow-300 hover:text-black p-2 rounded">
            <Link href="#education">Education & Skills</Link>
          </li>
          <li className="hover:bg-yellow-300 hover:text-black p-2 rounded">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="hover:bg-yellow-300 hover:text-black p-2 rounded">
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
