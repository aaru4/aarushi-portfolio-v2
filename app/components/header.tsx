import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
            float: left
          <Link href="./page">Home</Link>
        </li>
        <li>
          <Link href="/pages/edu">Education & Skills</Link>
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