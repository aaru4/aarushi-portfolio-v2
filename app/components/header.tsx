export default function Header() {
    return (
        <header className="bg-gray-800 p-4 text-white">
            <h1>aarushi ammavajjala</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/">About</a></li>
                    <li><a href="/edu">Education</a></li>
                    <li><a href="/exp">Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}