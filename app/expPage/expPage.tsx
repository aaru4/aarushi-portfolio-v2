import Link from 'next/link'; // Import Link component from Next.js

export default function About() {
  return (
    <div>
      <h1>Exp Page</h1>
      <p>
        <Link href="/">Back to Homepage</Link>
      </p>
    </div>
  );
}