import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/page.tsx">Home</Link>
        </li>
        <li>
          <Link href="/pages/edu.tsx">Education & Skills</Link>
        </li>
        <li>
          <Link href="/exp">Experience</Link>
        </li>
        <li>
          <Link href="/proj">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;